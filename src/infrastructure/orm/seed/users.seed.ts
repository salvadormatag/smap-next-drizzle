import * as argon2 from "argon2";
import {db} from "@/infrastructure/orm/db";
import {UserEntity, UserPrivilegesEntity, UserSettingsEntity} from "@/infrastructure/orm/schema";
import {FirstUsersData, UserPrivilegesData, UserSettingsData} from "@/infrastructure/orm/data/UsersData";


console.info(" 🌱 → Sembrant usuaris...");

export async function seedUsers() {
    const hashedUsers = await Promise.all(
        FirstUsersData.map(async (user) => ({
            ...user,
            passwordHash: await argon2.hash(user.passwordHash)
        }))
    );
    
    await db.insert(UserEntity)
    .values(hashedUsers)
    .onConflictDoNothing();
    
    await db.insert(UserPrivilegesEntity)
    .values(UserPrivilegesData)
    .onConflictDoNothing();
    
    await db.insert(UserSettingsEntity)
    .values(UserSettingsData)
    .onConflictDoNothing();
}