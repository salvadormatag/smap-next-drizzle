import * as fs from "node:fs";
import path from 'path';
import { sql } from 'drizzle-orm';
import {db} from "@/infrastructure/orm/db";

export async function applyCustomSQL() {
    const sqlDir = path.join(__dirname, '../sql'); // Ajusta la ruta a la teva carpeta .sql
    
    if (!fs.existsSync(sqlDir)) return;
    
    const files = fs.readdirSync(sqlDir).filter(f => f.endsWith('.sql'));
    
    for (const file of files) {
        const filePath = path.join(sqlDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        console.log(`  ➔ Aplicant lògica SQL: ${file}`);
        
        try {
            // Fem servir sql.raw perquè el contingut ja és SQL pur
            await db.execute(sql.raw(content));
        } catch (error) {
            console.error(`  ❌ Error en fitxer ${file}:`, error);
            throw error;
        }
    }
}