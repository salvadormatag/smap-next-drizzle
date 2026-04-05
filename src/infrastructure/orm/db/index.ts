import 'dotenv/config';
import {drizzle} from 'drizzle-orm/node-postgres';
import {Pool} from "pg";
import * as schema from "@/infrastructure/orm/schema";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
    // Altres opcions de configuració de Pool si són necessàries
});

export const db = drizzle(pool, {
    // 👈 Paso l'objecte d'esquema. Això activa db.query.Entitat.
    schema,
    // Descomentar per depurar queries
    // logger: true,
});

