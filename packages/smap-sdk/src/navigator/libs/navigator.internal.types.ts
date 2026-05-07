import {NavigatorFeatures, MenuItem} from "./navigator.types";

/**
 * Paràmetres que espera el component navigator que renderitza navbar o sidebar.
 * @private
 */
export interface NavigatorControllerProps {
    items: MenuItem[];
    features: NavigatorFeatures;
}

/**
 * Paràmetres que espera el component que renderitza els elements dels navegadors.
 * @private
 */
export interface RenderItemNavigatorProps {
    index: number;
    item: MenuItem;
    onClick?: (index: number) => void; // Opcional per tancar el menú quan es clica
    features: NavigatorFeatures;
    isOpen?: boolean;
    closeMenu?: () => void;
}
