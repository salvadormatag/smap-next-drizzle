import {foreignKey, integer, pgEnum, pgTable, varchar} from "drizzle-orm/pg-core";
import {sql} from "drizzle-orm";
import {AuditsFactory, IdentifiersFactory, UserEntity} from "@/infrastructure/orm/schema";

export const themeEnum = pgEnum(
    "theme",
    [
        "light",
        "dark"
    ],
);

export const communicationEnum = pgEnum(
    "communication_channel",
    [
        "email",
        "alert",
        "full"
    ]
);

export const UserSettingsEntity = pgTable(
    "users_settings",
    {
        ...IdentifiersFactory(),
        
        userId:
            integer("user_id")
            .notNull()
            .unique(),
        
        theme:
            themeEnum("theme")
            .notNull()
            .default(sql`'light'`),
        
        communicationChannel:
            communicationEnum("communication_channel")
            .notNull()
            .default(sql`'full'`),
        
        avatar:
            varchar("avatar", {length: 50}),
        
        ...AuditsFactory(),
    },
    (table) => [
        
        foreignKey({
            columns: [table.userId],
            foreignColumns: [UserEntity.pk],
        })
        .onUpdate("cascade")
        .onDelete("cascade"),
    ]);