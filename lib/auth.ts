import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type Session = {
    email: string;
    role: "student" | "doctor" | "moderator" | "admin" | "president";
    name: string;
};

const KEY = "unidoc_session";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Implement your authentication logic here
                // This is a placeholder - connect to your backend/database
                if (credentials?.email && credentials?.password) {
                    return {
                        id: credentials.email,
                        email: credentials.email,
                        name: credentials.email,
                    };
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.email = token.email as string;
            }
            return session;
        },
    },
};

export function setSession(session: Session) {
    if (typeof window === "undefined") return;
    localStorage.setItem(KEY, JSON.stringify(session));
}

export function clearSession() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(KEY);
}

export function getSessionClient(): Session | null {
    if (typeof window === "undefined") return null;
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw) as Session;
    } catch {
        return null;
    }
}