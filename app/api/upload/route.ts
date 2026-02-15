import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        // تحويل الملف لحفظه
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadDir = path.join(process.cwd(), "public/uploads");
        try {
            await fs.access(uploadDir);
        } catch {
            await fs.mkdir(uploadDir, { recursive: true });
        }

        const filePath = path.join(uploadDir, file.name);
        await fs.writeFile(filePath, buffer);

        // هنجيب أول يوزر موجود عشان نربط بيه الملف مؤقتاً
        const user = await prisma.user.findFirst();
        if (!user) {
            return NextResponse.json({ error: "No user found in DB" }, { status: 400 });
        }

        const newDoc = await prisma.document.create({
            data: {
                title: file.name,
                status: "Uploaded",
                fileUrl: `/uploads/${file.name}`,
                userId: user.id,
            },
        });

        return NextResponse.json({ success: true, document: newDoc });
    } catch (error: any) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}