import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, username, password } = body;
        if (!name || !username || !password) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 } );
        }
        const existing = await prisma.admin.findUnique({where:{username}});
        if (existing) {
            return NextResponse.json({ error: "Username already taken" }, { status: 409 } );
        }
        const hanshed = await bcrypt.hash(password, 10);
        const user = await prisma.admin.create({
            data:{
                name,
                username,
                password: hanshed,
            }
        })
        return NextResponse.json({ message: "Admin created successfully", user }, { status: 201 } );
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 } );
    }
}
