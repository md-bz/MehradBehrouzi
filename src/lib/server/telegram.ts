import { env } from "$env/dynamic/private";

export async function sendToTelegram(markdown: string, retry = 3) {
    for (let i = 0; i < retry; i++) {
        const res = await fetch(
            `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage?chat_id=${
                env.TELEGRAM_ID
            }&text=${encodeURIComponent(markdown)}&parse_mode=MarkdownV2`,
        );
        const json = await res.json();
        if (json.ok) {
            return;
        }
    }
}

export async function sendToTelegramPrivate(text: string, retry = 3) {
    for (let i = 0; i < retry; i++) {
        const res = await fetch(
            `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage?chat_id=${
                env.TELEGRAM_PRIVATE_ID
            }&text=${encodeURIComponent(text)}`,
        );
        const json = await res.json();
        if (json.ok) {
            return;
        }
    }
}
