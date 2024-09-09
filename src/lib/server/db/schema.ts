import type { InferInsertModel } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const post = sqliteTable("post", {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
    author: text("author").notNull(),
    slug: text("slug").notNull(),
    description: text("description").notNull(),
});

export type Post = InferInsertModel<typeof post>;
