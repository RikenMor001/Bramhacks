
// Take the req.body inputs and check if the user already exists or not 
// Than get the headers and check the headers are authorized are not 
// Than split the token from the header after requesting it back
// Than check if the token passed is correct or not 
// Signup sends the token to the user and while signing in the user will send back the token 
// Do the password validation in sing in and not sign up 
// Compare the password (Use bcrypt for that) 
// Than create the user in prims.user.create({data: {email: body.email, password: body.password}})


import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email, username },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: passwordHash,
      },
    });

    // Generate JWT token upon successful signup
    const JWT_SECRET = process.env.JWT_SECRET as string;
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

export function GET() {
  return NextResponse.json({
    message: "Welcome to localhost:3000/signup"
  });
}
