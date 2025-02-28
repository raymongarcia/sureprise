import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import User from "@/models/user";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials, req) {
                if (!credentials) {
                    return null;
                }
                const { email, password } = credentials as { email: string; password: string };
                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });

                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log(error)
                }
            }
        })
    ],
    session: {
        strategy: 'jwt' as 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };