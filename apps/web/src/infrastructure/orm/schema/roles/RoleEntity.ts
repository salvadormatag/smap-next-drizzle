import {pgTable, varchar} from "drizzle-orm/pg-core";
import {AuditsFactory, IdentifiersFactory} from "@/infrastructure/orm/schema";

export const RoleEntity = pgTable(
    "roles",
    {
        ...IdentifiersFactory(),
        
        name:
            varchar("name", {length: 10})
            .notNull()
            .unique(),
        
        ...AuditsFactory(),
    });