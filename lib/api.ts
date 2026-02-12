export async function apiGet<T>(path: string): Promise<T> {
    // placeholder: replace with real fetch later
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) throw new Error("API error");
    return (await res.json()) as T;
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
    const res = await fetch(path, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error("API error");
    return (await res.json()) as T;
}
