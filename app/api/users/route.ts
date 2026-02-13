import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // استدعاء الملف اللي عملناه فوق

// دالة لجلب البيانات (GET)
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// دالة لإضافة بيانات (POST)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
        role: body.role || "student",
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json({ error: "Email already exists or invalid data" }, { status: 400 });
  }
}