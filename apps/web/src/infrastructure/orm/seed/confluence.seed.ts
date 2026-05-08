import {db} from "@/infrastructure/orm/db"
import {ConfluenceDataSamples} from "@/infrastructure/orm/data/ConfluenceData";
import {ArticleEntity} from "@/infrastructure/orm/schema";

console.info(" 🌱 → Sembrant confluence...");

export async function seedConfluence() {
    
    // Registres de les primeres pàgines de les primeres wikis
    await db.insert(ArticleEntity)
    .values(ConfluenceDataSamples)
    .onConflictDoNothing();
}