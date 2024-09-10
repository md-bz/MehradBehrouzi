import { fail, redirect, type Cookies } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

async function login(email: string, password: string) {
    const res = await fetch(`${env.API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    return await res.json();
}

export const actions = {
    login: async ({
        cookies,
        request,
    }: {
        cookies: Cookies;
        request: Request;
    }) => {
        const data = await request.formData();

        const email = data.get("email");
        const password = data.get("password");

        if (!email || !password) {
            return fail(422, { missing: true });
        }

        const res = await login(String(email), String(password));

        if (res.status === "fail") {
            return fail(422, { error: res.message });
        }

        if (res && res.token) {
            cookies.set("jwt", res.token, { path: "/" });
            redirect(302, "/");
        }
    },
};
