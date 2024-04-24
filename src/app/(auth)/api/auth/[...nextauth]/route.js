import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import {loginService} from "@/services/auth.service";

export const authOption = {
    providers: [
        CredentialsProvider({
            async authorize(newUserInfo) {
                const userData = {
                    email: newUserInfo?.email,
                    password: newUserInfo?.password,
                }
                return await loginService(userData)
            },
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt", // Adjust this based on your session strategy
    },
    pages: {
        signIn: "/login",
    },

    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user};
        },
        async session({session, token}) {
            session.user = token;
            return session;
        },
    },
};

const handler = NextAuth(authOption);
export {handler as GET, handler as POST};