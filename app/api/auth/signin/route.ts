import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return NextResponse.json({
                error: "User does not exist",
            }, { status: 400 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({
                error: "Invalid password",
            }, { status: 400 });
        }

        const JWT_SECRET = process.env.JWT_SECRET as string;

        if (!JWT_SECRET) {
            return NextResponse.json({
                error: "Token secret is not defined",
            }, { status: 500 });
        }

        const userToken = jwt.sign({ id: user.id }, JWT_SECRET, {
            expiresIn: "1h",
        });

        return NextResponse.json({
            message: "Sign-in successful!",
            token: userToken,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            error: "An error occurred during the signing process: " + error,
        }, { status: 500 });
    }
}
