import {IconKey} from "../libs/NavigatorIconsLibrary";

/**
 * Conjunt de paràmetres requerits + opcionals pel renderitzat d'un component de navegació.
 * Hi ha dos models: Navbar i Sidebar.
 * @public
 */
export interface NavigatorComponentProps {
    // La col·lecció d'ítems a renderitzar
    items: MenuItem[];
    // Característiques del navegador
    features: NavigatorFeatures;
}

/**
 * Els objectes MenuItem poden ser de tres tipus:
 * 1. SingleLink: Enllaç cap a contingut.
 * 2. LinkWithOptions: Enllaç cap a contingut + opcions.
 * 3. OnlyOptions: Enllaç '#', únicament contenidor d'opcions. (En el cas 3, el sdk sobreescriu el
 * slug a '#' si no ho està).
 * @public
 */
export enum MenuItemTypes {
    SINGLE_LINK = "only-link",
    LINK_WITH_OPTIONS = "link-with-options",
    ONLY_OPTIONS = "only-options",
}

/**
 * Defineix pel component de navegació, el comportament que tindràn els elements amb submenu.
 * Aplica només a submenus de sidebars per raons òbvies de la navegabilitat de l'aplicatiu.
 * @public
 */
export interface NavigatorFeatures {
    // Indica si, el submenu en una sidebar es mantindrà desplegat o no (per defecte true).
    opened: boolean | true;
    // Indicador de si el contenidor submenu està o no col·lapsat (per defecte false).
    collapsed: boolean | false;
    // Indica el component a renderitzar (la lògica de funcionament)
    model: "NAVBAR" | "SIDEBAR";
}

/**
 * Cadascun dels ítems que configuren els components Navbar i Sidebar.
 * @public
 */
export interface MenuItem {
    // Literal a mostrar en la caixa de l'element
    label: string;
    // URL relatiu al contingut
    // (Si el tipus === MenuItemTypes.ONLY_OPTIONS, no es tindrà en compte l'URL i s'aplicarà '#').
    slug: string;
    // Tipus de MenuItem
    type: MenuItemTypes;
    // Llistat d'opcions (altres MenuItem) de l'ítem
    options?: MenuItem[];
    // Opcionalment, pot renderitzar una icona (@heroicons/react/24/outline)
    icon?: IconKey | "bug";
}

/**
 * Paràmetres que espera el component que renderitza la icona d'un MenuItem.
 * @public
 */
export interface MenuItemIconProps {
    iconKey: IconKey;
    className?: string;
    isActive?: boolean | false;
}

export interface SubmenuProps {
    item: MenuItem;
    onClick?: (index: number) => void;
    isActive?: boolean | false;
}
