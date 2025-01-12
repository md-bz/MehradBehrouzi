import type { InferInsertModel } from "drizzle-orm";
import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const post = pgTable("post", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    author_name: text("author_name").notNull(),
    author_email: text("author_email").notNull(),
    slug: text("slug").notNull(),
    description: text("description").notNull(),
    url: text("url").notNull(),
    language: text("language").notNull().default("fa"),
});

export type Post = InferInsertModel<typeof post>;
