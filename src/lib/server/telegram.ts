import { env } from "$env/dynamic/private";
import { Telegraf } from "telegraf";

export async function sendToTelegram(markdown: string) {
    const bot = new Telegraf(env.BOT_TOKEN);
    bot.launch();
    await bot.telegram.sendMessage(env.TELEGRAM_ID, markdown, {
        parse_mode: "MarkdownV2",
    });
    bot.stop();
}
