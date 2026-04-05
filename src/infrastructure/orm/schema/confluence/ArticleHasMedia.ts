import {foreignKey, integer, pgTable, uniqueIndex} from "drizzle-orm/pg-core";
import {ArticleEntity, AuditsFactory, IdentifiersFactory, MediaEntity} from "@/infrastructure/orm/schema";

export const ArticleHasMedia = pgTable(
    "article_has_media",
    {
        ...IdentifiersFactory(),
        
        articleId:
            integer("article_id")
            .notNull(),
        
        mediaId:
            integer("media_id")
            .notNull(),
        
        ...AuditsFactory(),
    },
    (table) => [
        
        uniqueIndex("article_has_media_unique")
        .on(table.articleId, table.mediaId),
        
        foreignKey({
            columns: [table.articleId],
            foreignColumns: [ArticleEntity.pk]
        })
        .onUpdate("cascade")
        .onDelete("cascade"),
        
        foreignKey({
            columns: [table.mediaId],
            foreignColumns: [MediaEntity.pk]
        })
        .onUpdate("cascade")
        .onDelete("cascade")
    ]
);