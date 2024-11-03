import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse){
    try {
        const { username, password }  = await req.json();
        const user = await prisma.user.findUnique({
            where:{
                username,
                password
            }
        })

        if (!user){
            return NextResponse.json({
                error: "There does not exist any user"
            }, {status: 400})
        }
    
        const JWT_SECRET = process.env.JWT_SECRET as string;
        if (JWT_SECRET){
            return NextResponse.json({
                error: "Token sent was invalid/unauthorised"
            })
        }

        const userToken = jwt.sign({id: user.id}, JWT_SECRET, {
            expiresIn: "1h"
        })
    
        return NextResponse.json({
            message: "Sign-in successful!!",
            token: userToken
        }, {status: 200})
    }catch(error){
        return NextResponse.json({
            error: "There was an error while doing the signing process" + error
        })
    }
}

export function GET() {
    return NextResponse.json({
      message: "Welcome to localhost:3000/signin"
    });
  }
  