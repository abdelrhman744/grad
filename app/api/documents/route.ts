import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// 1. وظيفة لجلب كل المستندات (عشان نعرضهم في الجدول)
export async function GET() {
  try {
    const documents = await prisma.document.findMany({
      include: {
        user: {
          select: { name: true, email: true } // بيجيب اسم صاحب المستند معاه
        }
      },
      orderBy: { createdAt: 'desc' } // يرتبهم من الأحدث للأقدم
    });
    return NextResponse.json(documents);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch documents" }, { status: 500 });
  }
}

// 2. وظيفة لإضافة مستند جديد
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, status, userId } = body;

    const newDoc = await prisma.document.create({
      data: {
        title,
        status: status || "Pending",
        userId: parseInt(userId), // تأكد إن الـ ID رقم
      },
    });

    return NextResponse.json(newDoc);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Could not create document" }, { status: 400 });
  }
}