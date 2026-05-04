import {IconKey} from "../libs/NavigatorIconsLibrary";

/**
 * Els objectes MenuItem poden ser de tres tipus:
 * 1. SingleLink: Enllaç cap a contingut.
 * 2. LinkWithOptions: Enllaç cap a contingut + opcions.
 * 3. OnlyOptions: Enllaç '#' únicament contenidor d'opcions.
 * @public
 */
export enum MenuItemTypes {
    SINGLE_LINK = "Enllaç cap a contingut o extern",
    LINK_WITH_OPTIONS = "Enllaç cap a contingut + opcions",
    ONLY_OPTIONS = "Enllaç '#' únicament contenidor d'opcions",
}

/**
 * Peça individual que forma part dels components Navbar i Sidebar
 * @private
 */
export interface MenuItem {
    // Literal a mostrar en la caixa de l'element
    label: string;
    // URL relatiu al contingut (Si el tipus === MenuItemTypes.ONLY_OPTIONS, no es tindrà en compte l'URL i s'aplicarà '#')
    slug: string | "#";
    // Llistat d'opcions (altres MenuItem) de l'ítem
    options?: MenuItem[];
    // Opcionalment, pot renderitzar una icona (@heroicons/react/24/outline)
    icon?: IconKey | "bug";
    // Tipus de MenuItem
    type: MenuItemTypes;
}

/**
 * Paràmetres que espera el component navigator que renderitza navbar o sidebar.
 * @private
 */
export interface RenderItemsProps {
    items: MenuItem[];
    mode: "navbar" | "sidebar";
}

/**
 * Paràmetres que espera el component que renderitza la icona d'un MenuItem.
 * @private
 */
export interface MenuItemIconProps {
    iconKey: IconKey;
    className?: string;
}

/**
 * Paràmetres que espera el component que renderitza els elements dels navegadors.
 * @private
 */
export interface MenuItemLinkProps {
    label: string;
    href: string;
    icon?: IconKey;
    onClick?: () => void; // Opcional per tancar el menú quan es clica
    mode: "navbar" | "sidebar";
}

export interface MenuItemLinkActiveProps {
    label: string;
    href: string;
    icon?: IconKey;
    onClick?: () => void; // Opcional per tancar el menú quan es clica
    isActive?: boolean;
    mode: "navbar" | "sidebar";
}

export interface MenuItemSubmenuProps {
    label: string;
    href: "#";
    menu: string;
    icon?: IconKey;
    options?: MenuItemProps[];
}

export type MenuItemProps = MenuItemLinkProps | MenuItemSubmenuProps;

export interface SubmenuItemProps {
    item: MenuItem;
    index: number;
    isOpen: boolean;
    onClick: (index: number) => void;
    closeMenu: () => void;
    mode: "navbar" | "sidebar";
    href: string;
    menu: string;
}

export interface NavbarComponentProps {
    items: MenuItem[];
}

export interface SidebarComponentProps {
    items: MenuItem[];
}

export interface NavigatorProps {
    mode: "navbar" | "sidebar";
    items: MenuItemProps[];
}

export interface RenderMenuFromItemsProps {
    origin: "navbar" | "sidebar";
    items: MenuItemProps[];
}

