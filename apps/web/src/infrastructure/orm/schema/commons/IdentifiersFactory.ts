import {integer, uuid} from "drizzle-orm/pg-core";
import {sql} from "drizzle-orm";

export function IdentifiersFactory() {
    return {
        
        pk:
            integer('pk')
            .primaryKey()
            .generatedAlwaysAsIdentity(),
        
        id:
            uuid('id')
            .unique()
            .default(sql`gen_random_uuid()`)
            .notNull(),
    }
}