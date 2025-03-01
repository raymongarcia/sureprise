import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user"

interface RequestBody {
    email: string;
}

interface UserResponse {
    _id: string;
}

export async function POST(req: Request): Promise<NextResponse> {
    try {
        await connectMongoDB();
        const { email }: RequestBody = await req.json();
        const user = await User.findOne({ email }).select("_id").lean().exec();
        const userResponse: UserResponse | null = user && !Array.isArray(user) ? { _id: user._id as string } : null;
        console.log("user:", user);
        return NextResponse.json({ user });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}