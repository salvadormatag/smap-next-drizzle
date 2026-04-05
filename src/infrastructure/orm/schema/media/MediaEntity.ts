import {pgTable} from "drizzle-orm/pg-core";
import {IdentifiersFactory} from "@/infrastructure/orm/schema/commons/IdentifiersFactory";
import {AuditsFactory} from "@/infrastructure/orm/schema/commons/AuditsFactory";
import {bytea} from "@/infrastructure/orm/utils";

export const MediaEntity = pgTable(
    "medias",
    {
        ...IdentifiersFactory(),
        
         content: bytea("content").notNull(),
        
        ...AuditsFactory()
    }
);