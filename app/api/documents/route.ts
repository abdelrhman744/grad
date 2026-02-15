import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const documents = await prisma.document.findMany({
            include: {
                user: { select: { name: true } }
            },
            orderBy: { createdAt: "desc" }
        });
        return NextResponse.json(documents);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
}