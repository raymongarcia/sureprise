import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

interface RegisterRequestBody {
    name: string;
    email: string;
    password: string;
}

export async function POST(req: Request): Promise<NextResponse> {
    try {
        const { name, email, password }: RegisterRequestBody = await req.json();

        const hashedPassword: string = await bcrypt.hash(password, 10);

        await connectMongoDB();
        await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User Registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while registering the user." }, { status: 500 });
    }
}