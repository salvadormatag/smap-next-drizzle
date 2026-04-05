if (!process.env.npm_config_user_agent?.startsWith('pnpm')) {
    console.error('🚫 Prohibit fer servir npm. Utilitza pnpm.');
    process.exit(1);
}