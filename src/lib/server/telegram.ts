import { env } from "$env/dynamic/private";

export async function sendToTelegram(markdown: string) {
    await fetch(
        `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage?chat_id=${
            env.TELEGRAM_ID
        }&text=${encodeURIComponent(markdown)}&parse_mode=MarkdownV2`
    );
}
