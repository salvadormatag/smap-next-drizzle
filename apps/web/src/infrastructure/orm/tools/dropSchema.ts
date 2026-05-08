import {db} from "@/infrastructure/orm/db";
import {sql} from "drizzle-orm";

async function dropSchema() {
    console.log("🔥 Destruint l'esquema de la base de dades...");
    try {
        // 1. ELIMINAR L'ESQUEMA COMPLET (el que fa Drizzle per defecte, normalment 'public')
        // El comandament CASCADE elimina tot el contingut (taules, vistes, etc.)
        await db.execute(sql`DROP SCHEMA IF EXISTS public CASCADE`);
        console.log("✅ Esquema 'public' esborrat amb èxit (incloent totes les taules).");
        
        // 2. RECREAR L'ESQUEMA
        // Drizzle necessita que l'esquema existeixi per poder-hi escriure
        await db.execute(sql`CREATE SCHEMA public`);
        console.log("✅ Esquema 'public' recreat.");
        
    } catch (error) {
        console.error("❌ Error en destruir/recrear l'esquema:", error);
        throw error;
    } finally {
        console.log("Neteja finalitzada");
    }
}

console.log("********************************************* EXECUTANT DROP DATABASE **************************");
dropSchema().catch(err => {
    console.error("El procés de drop ha fallat.");
    process.exit(1);
});