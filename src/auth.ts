import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import { env } from "$env/dynamic/private";

// @ts-ignore
export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
    const authOptions = {
        providers: [
            GitHub({
                clientId: env.AUTH_GITHUB_ID,
                clientSecret: env.AUTH_GITHUB_SECRET,
            }),
        ],
        callbacks: {
            signIn({ profile }: { profile: { email: string } }) {
                return profile.email === env.AUTH_EMAIL;
            },
        },
        secret: env.AUTH_SECRET,
        trustHost: true,
    };
    return authOptions;
});
