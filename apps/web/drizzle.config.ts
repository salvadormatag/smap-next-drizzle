import 'dotenv/config';
import {defineConfig} from 'drizzle-kit';

export default defineConfig({
    out: './src/infrastructure/orm',
    schema: './src/infrastructure/orm/schema/*',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
