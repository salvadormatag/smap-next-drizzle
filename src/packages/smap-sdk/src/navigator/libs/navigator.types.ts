import {IconKey} from "../libs/NavigatorIconsLibrary";

/**
 * Contracte pel component que renderitza els elements dels menús i submenús.
 */
export interface MenuItem {
    // Literal a mostrar en la caixa de l'element
    label: string;
    // Si hi ha slug el considerarem Link
    slug: string | "#";
    // Si hi ha options (encara que hi hagi slug), el considerarem submenú
    options?: MenuItem[];
    // Opcionalment, pot pintar una icona (@heroicons/react/24/outline)
    icon?: IconKey | "bug";
}

/**
 * Contracte dels paràmetres que espera el component que renderitza navbar o sidebar
 */
export interface RenderItemsProps {
    items: MenuItem[];
    mode: "navbar" | "sidebar";
}

/**
 * Contracte dels paràmetres que espera el component que renderitza la icona d'un MenuItem 
 */
export interface MenuItemIconProps {
    iconKey: IconKey;
    className?: string;
}

export interface MenuItemLinkProps {
    label: string;
    href: string;
    icon?: IconKey;
    onClick?: () => void; // Opcional per tancar el menú quan es clica
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

