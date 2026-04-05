import {integer, timestamp} from "drizzle-orm/pg-core";

export const PRIMARY_KEY_SYSTEM = 1;

export function AuditsFactory() {
    return {
        
        createdAt:
            timestamp("created_at", {withTimezone: true})
            .defaultNow()
            .notNull(),
        
        createdBy:
            integer("created_by")
            .default(PRIMARY_KEY_SYSTEM)
            .notNull(),
        
        updatedAt:
            timestamp("updated_at", {withTimezone: true})
            .defaultNow()
            .notNull(),
        
        updatedBy:
            integer("updated_by")
            .default(PRIMARY_KEY_SYSTEM)
            .notNull(),
        
        deletedAt:
            timestamp("deleted_at", {withTimezone: true}),
        
        deletedBy:
            integer("deleted_by"),
    };
}
