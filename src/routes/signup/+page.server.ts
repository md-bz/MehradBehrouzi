import { fail, redirect, type Cookies } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

async function signup(
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
) {
    const res = await fetch(`${env.API_URL}/users/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, passwordConfirm }),
    });
    return await res.json();
}

export const actions = {
    signup: async ({
        cookies,
        request,
    }: {
        cookies: Cookies;
        request: Request;
    }) => {
        const data = await request.formData();

        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");
        const passwordConfirm = data.get("passwordConfirm");

        if (!name || !email || !password || !passwordConfirm) {
            return fail(422, { missing: true });
        }

        const res = await signup(
            String(name),
            String(email),
            String(password),
            String(passwordConfirm)
        );

        if (res.status === "fail") {
            return fail(422, { error: res.message });
        }

        if (res && res.token) {
            cookies.set("jwt", res.token, { path: "/" });
            redirect(302, "/");
        }
    },
};
