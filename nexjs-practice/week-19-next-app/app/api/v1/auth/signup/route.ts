import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/db";

export async function POST(req: NextRequest) {

    const { username, password } = await req.json();
    await prisma.user.create({
        data: {
            username,
            password
        }
    })

    
    return NextResponse.json({
        message : "signup successful"
    })
}