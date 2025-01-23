import { env } from "$env/dynamic/private";
function getChunks(str: string, maxSize: number) {
    const chunks = [];
    let currentChunk = "";

    str.split("\n").forEach((sentence) => {
        if (currentChunk.length + sentence.length + 1 > maxSize) {
            chunks.push(currentChunk.trim());
            currentChunk = "";
        }
        currentChunk += sentence + "\n";
    });
    if (currentChunk.trim().length > 0) {
        chunks.push(currentChunk.trim());
    }

    return chunks;
}

export async function sendToTelegram(markdown: string, retry = 3) {
    if (markdown.length > 4096) {
        const chunks = getChunks(markdown, 4096);
        for (const chunk of chunks) {
            await sendToTelegram(chunk);
        }
        return;
    }

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
        if (i === retry - 1) {
            throw new Error(json.description);
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
        if (i === retry - 1) {
            throw new Error(json.description);
        }
    }
}
