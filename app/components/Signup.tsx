"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { ChangeEvent, useState } from "react";

export default function Signup() {
    const [ username, setUsername ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [error, setError] = useState<string | any>(null);
    const router = useRouter();

    const handleClick = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/auth/signup", { username,email, password });
            if (response.status === 200) {
                router.push("/signin"); 
            } else {
                setError("Invalid credentials. Please try again."); 
            }
        } catch (error: any) {
            if (error.response?.status === 404) {
                setError("User does not exist. Please sign up."); 
            } else {
                setError(error.response?.data?.message || "Sign-in failed. Please try again."); 
            }
        }
    };

    return (
        <div className="flex justify-center bg-zinc-300	items-center h-screen flex-col">
            <div className="text-center mb-8">
                <h1 className="font-bold text-4xl text-gray-800 mb-2">Create Your Account</h1>
                <p className="text-gray-600">Join us and drive towards a sustainable future.</p>
            </div>

            <Input
                label="Username"
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
            />
            
            <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
            /> 

            <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
            />


            <div className="mt-6">
                <button
                    onClick={handleClick}
                    className="bg-gray-900 text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition duration-200">
                    Sign Up
                </button>
            </div>

            <div className="mt-4 flex items-center text-gray-600">
                <p className="mr-2">Already have an account?</p>
                    <button onClick={() => {
                        router.push("/signin")
                    }} className="text-slate-600 hover:underline">Sign In</button>
            </div>
        </div>
    );
}

interface inputTypes {
    label: string;
    placeholder: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, placeholder, type, onChange }: inputTypes) {
    return (
        <div className="flex flex-col items-center w-full mb-5">
            <label className="font-semibold text-lg text-gray-800 mb-2">{ label }</label>
            <input
                placeholder={ placeholder }
                type={ type }
                onChange={ onChange }
                className="w-1/5 bg-gray-200 text-gray-900 text-sm rounded-lg shadow-md p-4 border border-gray-400"
            />
        </div>
    );
}
