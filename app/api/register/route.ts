import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json();

    // تشفير الباسورد
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "User created!", userId: user.id });
  } catch (error) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
}