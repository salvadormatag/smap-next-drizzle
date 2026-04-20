import {
    applyCustomSQL,
    runSeeds,
    syncSchema,
    testAnonymization,
} from "@/infrastructure/orm/build";
import {testUpdateDateAnonymization} from "@/infrastructure/orm/build/testingSQLTools";


async function main() {
    syncSchema();
    await runSeeds();
    await applyCustomSQL();
    await testAnonymization();
    await testUpdateDateAnonymization();
    
    // @todo -> Executar un test que comprovi el correcte funcionament de la funció i el trigger
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});