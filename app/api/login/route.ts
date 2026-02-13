import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // 1. البحث عن المستخدم
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // 2. التأكد من الباسورد
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  // 3. لو كله تمام (في العادي بنبعت Token هنا، بس مبدئياً هنبعت بيانات المستخدم)
  return NextResponse.json({
    message: "Login successful",
    user: { id: user.id, name: user.name, email: user.email }
  });
}