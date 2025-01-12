import { sql, type InferInsertModel } from "drizzle-orm";
import { pgTable, text, serial, timestamp, pgEnum } from "drizzle-orm/pg-core";
export const languageEnum = pgEnum("language", ["fa", "en"]);

export const post = pgTable("post", {
    id: serial("id").primaryKey(),
    name: text("name").notNull().unique(),
    author_name: text("author_name").notNull(),
    author_email: text("author_email").notNull(),
    slug: text("slug").notNull().unique(),
    description: text("description").notNull(),
    url: text("url").notNull().unique(),

    language: languageEnum("language").notNull().default("fa"),

    created_at: timestamp("created_at").notNull().defaultNow(),

    updated_at: timestamp("updated_at")
        .notNull()
        .defaultNow()
        .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});

export type Post = InferInsertModel<typeof post>;
