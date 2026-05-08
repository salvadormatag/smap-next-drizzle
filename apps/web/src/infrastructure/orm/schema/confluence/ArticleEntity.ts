import {jsonb, pgTable, varchar} from "drizzle-orm/pg-core";
import {JSONContent} from "@tiptap/core";
import {AuditsFactory, IdentifiersFactory} from "@/infrastructure/orm/schema";

export const ArticleEntity = pgTable(
    "articles",
    {
        ...IdentifiersFactory(),
        
        title:
            varchar("title", {length: 255})
            .notNull()
            .unique(),
        
        content:
            jsonb("content").$type<JSONContent>(),
        
        ...AuditsFactory()
    }
);