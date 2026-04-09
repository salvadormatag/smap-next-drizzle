import {db} from "@/infrastructure/orm/db";
import {UserEntity} from "@/infrastructure/orm/schema";
import {eq} from "drizzle-orm";
import {fullUser} from "@/infrastructure/orm/schema/users/UserEntity";

export async function testAnonymization(pk: number) {
    console.log("🧪 Iniciant test de validació del Trigger...");
    
    // 1. Busquem un usuari que sabem que existeix (creat al seed)
    const users: fullUser[] = await db
        .select()
        .from(UserEntity)
        .where(eq(UserEntity.pk, pk));
    
    if (!users) {
        throw new Error("❌ Test fallit: No s'ha trobat l'usuari 'User 2' per testejar.");
    }
    
    const userToTest = users[0];
    
    console.log(`   - Intentant esborrar l'usuari: ${userToTest.name} (PK: ${userToTest.pk})`);
    
    // 2. Executem el DELETE (que el trigger hauria d'interceptar)
    await db.delete(UserEntity).where(eq(UserEntity.pk, userToTest.pk));
    
    // 3. Verifiquem els resultats
    const anonymizedUser = await db.query.UserEntity.findFirst({
        where: (users, { eq }) => eq(users.pk, userToTest.pk)
    });
    
    if (!anonymizedUser) {
        throw new Error("❌ ERROR: L'usuari ha desaparegut de la BD! El trigger no ha funcionat.");
    }
    
    const isAnonymized =
        anonymizedUser.name === 'ANON' &&
        anonymizedUser.unsubscribedAt !== null &&
        anonymizedUser.email.startsWith('anon_');
    
    if (isAnonymized) {
        console.log("✅ TEST REEIXIT: L'usuari ha estat anonimitzat correctament.");
        console.log(`   - Nou full_name: ${anonymizedUser.fullName}`);
        console.log(`   - Data d'esborrat: ${anonymizedUser.unsubscribedAt}`);
    } else {
        throw new Error("❌ ERROR: L'usuari existeix però les dades NO s'han anonimitzat.");
    }
}