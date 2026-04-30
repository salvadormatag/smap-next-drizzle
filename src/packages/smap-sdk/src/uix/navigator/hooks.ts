import {useMemo} from 'react';
import {NavigatorConfig, SmapNavigator} from "@smap-dev/sdk/uix";

export function useSmapNavigator(options: NavigatorConfig) {
    // La "mecànica" ara viu aquí dins, protegida
    return useMemo(() => new SmapNavigator(options), [
        // Només es recrea si canvien les opcions crítiques
        JSON.stringify(options.items)
    ]);
}