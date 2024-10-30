import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt, { compare } from "bcrypt";
const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse){
    const { email, password } = await req.json();
    const user = await prisma.user.findMany({
        where: {
            email: email,
            password: password
        }
    })
    if (user){
        return NextResponse.json({message: "User already exists"}, {
            status: 400
        })
    }
    const headers = req.headers;
    const authorization = headers.get("authorization");
    if (!authorization){
        return NextResponse.json({message: "Authorization header not found"}, {
            status: 400
        })
    }

    const token = authorization.split(" ")[1];
    if (!token){
        return NextResponse.json({message: "Token not found"}, {
            status: 400
        })
    }
    
    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.user.create({
        data: {
            email: email,
            password: passwordHash
        }
    })
    return NextResponse.json({message: "User created"}, {
        status: 200
    })

}
