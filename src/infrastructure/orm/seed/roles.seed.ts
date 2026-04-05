import {db} from "@/infrastructure/orm/db";
import {RoleEntity, RolePrivilegesEntity} from "@/infrastructure/orm/schema";
import {FirstRolesData, RolesPrivilegesData} from "@/infrastructure/orm/data/RolesData";


console.info(" 🌱 → Sembrant roles...");

export async function seedRoles() {
    await db.insert(RoleEntity)
    .values(FirstRolesData)
    .onConflictDoNothing();
    
    await db.insert(RolePrivilegesEntity)
    .values(RolesPrivilegesData)
    .onConflictDoNothing();
}