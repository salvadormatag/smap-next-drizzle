import {seedUsers} from "@/infrastructure/orm/seed/users.seed";
import {seedRoles} from "@/infrastructure/orm/seed/roles.seed";
import {seedConfluence} from "@/infrastructure/orm/seed/confluence.seed";

export async function runSeeds() {
    await seedConfluence();
    await seedRoles();
    await seedUsers();
    console.log("✨ Sembrat de dades completat.");
}