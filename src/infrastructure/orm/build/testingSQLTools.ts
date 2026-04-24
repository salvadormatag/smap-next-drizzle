import {db} from "@/infrastructure/orm/db";
import {UserEntity} from "@/infrastructure/orm/schema";
import {eq} from "drizzle-orm";
import {fullUser} from "@/infrastructure/orm/schema/users/UserEntity";
import {
    getDateFormatWebFromDB,
    getFullDateFormatWebFromDB,
    SmapDateUtils,
    SmapDateParser
} from "@/Smap/dates";

const USER_PK: number = 3;

export async function testAnonymization() {
    console.log("🧪 Iniciant test de validació del Trigger...");
    
    const userToTest = await getUserToTesting();
    
    console.log(`   - Intentant esborrar l'usuari: ${userToTest.name} (PK: ${userToTest.pk})`);
    
    // 2. Executem el DELETE (que el trigger hauria d'interceptar)
    await db.delete(UserEntity).where(eq(UserEntity.pk, userToTest.pk));
    
    // 3. Verifiquem els resultats
    const anonymizedUser = await getUserToTesting();
    
    if (!anonymizedUser) {
        throw new Error("❌ ERROR: L'usuari ha desaparegut de la BD! El trigger no ha funcionat.");
    }
    
    const isAnonymized =
        anonymizedUser.name === 'ANON' &&
        anonymizedUser.unsubscribedAt !== null &&
        anonymizedUser.email.startsWith('anon_');
    
    if (isAnonymized) {
        console.log("✅ TEST REEIXIT: L'usuari ha estat anonimitzat correctament.");
        console.log(`   - L'usuari: ${anonymizedUser.fullName} es va crear el: ${getDateFormatWebFromDB(anonymizedUser.createdAt)}`);
        console.log(`   - Nou full_name: ${anonymizedUser.fullName} - ${anonymizedUser.email}`);
        console.log(`   - Data d'esborrat: ${getFullDateFormatWebFromDB(anonymizedUser.unsubscribedAt)}`);
    } else {
        throw new Error("❌ ERROR: L'usuari existeix però les dades NO s'han anonimitzat.");
    }
}

export async function testUpdateDateAnonymization() {
    console.log(`🧪 Iniciant test d'actualització de la data d'anonimització de l'usuari amb pk: ${USER_PK}`);
    
    const userToTest = await getUserToTesting();
    
    console.log(`   - Preparant l'update de l'usuari: ${userToTest.name} (PK: ${userToTest.pk})`);
    
    const prevDate = getFullDateFormatWebFromDB(userToTest.unsubscribedAt);
    
    // Actualitzem la data de la seva anonimització
    const dataToSet = {
        unsubscribedAt: SmapDateParser.parseWebDateToDate("15/04/2026 15:45:16")
    }
    
    // Executem el update
    await db
        .update(UserEntity)
        .set(dataToSet)
        .where(eq(UserEntity.pk, USER_PK));
    
    const userToTestUpdated = await getUserToTesting();
    
    const nextDate = getFullDateFormatWebFromDB(userToTestUpdated.unsubscribedAt);
    
    const parsedPrev = SmapDateParser.parseWebDateToDate(prevDate);
    const parsedNext = SmapDateParser.parseWebDateToDate(nextDate);
    
    if (!parsedPrev || !parsedNext) {
        throw new Error(`❌ Test fallit: No s'han pogut parsejar les dates a avaluar.`);
    }
    
    const diffDays = SmapDateUtils.getTempsTranscorregut(parsedPrev, parsedNext);
    const expectedDays = 5;
    const evalConditions = parsedNext < parsedPrev && expectedDays === diffDays;
    
    console.log(`Comparativa de les dues dates del user to test amb pk: ${USER_PK}`, {
        prev: {
            web: prevDate,
            db: parsedPrev
        },
        next: {
            web: nextDate,
            db: parsedNext
        },
        success: {
            test: "parsedNext > parsedPrev",
            result: `Data retrocedida correctament?: ${evalConditions ? "correcte" : "incorrecte"}`,
            range: `dies transcorreguts: ${diffDays}`
        }
    });
    
}

async function getUserToTesting(): Promise<fullUser> {
    // 1. Busquem un usuari que sabem que existeix (creat al seed)
    const users: fullUser[] = await db
    .select()
    .from(UserEntity)
    .where(eq(UserEntity.pk, USER_PK));
    
    if (!users) {
        throw new Error(`❌ Test fallit: No s'ha trobat l'usuari 'User ${USER_PK}' per testejar.`);
    }
    
    return users[0];
}