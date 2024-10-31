

// Take the req.body inputs and check if the user already exists or not 
// Than get the headers and check the headers are authorized are not 
// Than split the token from the header after requesting it back
// Than check if the token passed is correct or not 
// Signup sends the token to the user and while signing in the user will send back the token 
// Do the password validation in sing in and not sign up 
// Compare the password (Use bcrypt for that) 
// Than create the user in prims.user.create({data: {email: body.email, password: body.password}})
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import axios from 'axios';

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, password } = await req.json();
    const response = await axios.post("http://localhost:3000");
    if (response){
        return NextResponse.json({
            message: "credentials sent to the frontend"
        }, {status: 200})
    }
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ 
        message: "User already exists" 
    }, { status: 400 });
    }

    // Check Authorization header
    const authorization = req.headers.get("authorization");
    if (!authorization) {
      return NextResponse.json({ 
        message: "Authorization header not found" 
    }, { status: 401 });
    }

    // Extract and verify token
    const token = authorization.split(" ")[1];
    if (!token) {
      return NextResponse.json({ message: "Token not found" }, { status: 401 });
    }

    const JWT_SECRET = process.env.JWT_SECRET as string;
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not set");
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
      return NextResponse.json({ message: "Invalid token" }, { status: 403 });
    }

    // Hash the password and create the user
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: passwordHash,
      },
    });

    // Generate token for the user upon successful signup
    const userToken = jwt.sign({ id: newUser.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return NextResponse.json(
      { message: "User created", token: userToken },
      { status: 200 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "An error occurred during signup" },
      { status: 500 }
    );
  }
}

export default function GET(req: NextRequest, res: NextResponse){
  return NextResponse.json({
    message: "Welcome to localhost:3000"
  })
}
