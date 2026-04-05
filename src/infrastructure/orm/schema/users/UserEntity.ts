import {pgTable, text, timestamp, varchar} from "drizzle-orm/pg-core";
import {AuditsFactory, IdentifiersFactory} from "@/infrastructure/orm/schema";

export const UserEntity = pgTable(
    "users",
    {
        ...IdentifiersFactory(),
        
        fullName:
            varchar("full_name", {length: 255}),
        
        name:
            varchar("name", {length: 80})
            .notNull(),
        
        firstSurname:
            varchar("first_surname", {length: 80}),
        
        secondSurname:
            varchar("second_surname", {length: 80}),
        
        passwordHash:
            text("password"),
        
        email:
            varchar({length: 255})
            .notNull()
            .unique(),
        
        unsubscribedAt:
            timestamp("unsubscribed_at", {withTimezone: true}),
        
        ...AuditsFactory(),
    });