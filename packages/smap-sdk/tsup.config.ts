import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        
        'auth/index': 'src/auth/index.ts',
        'instants/index': 'src/instants/index.ts',
        'uix/navigator/index': 'src/uix/navigator/index.ts',
    },
    
    format: ['cjs', 'esm'],
    
    dts: true,
    
    clean: true,
    
    sourcemap: true,
});