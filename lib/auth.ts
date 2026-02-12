type Session = {
    email: string;
    role: "student" | "doctor" | "moderator" | "admin" | "president";
    name: string;
};

const KEY = "unidoc_session";

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
