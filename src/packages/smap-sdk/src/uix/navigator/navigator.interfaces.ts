export type NavMode = 'sidebar' | 'navbar';

export interface NavItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    path?: string;
    disabled?: boolean;
}

export interface NavigatorConfig {
    items: NavItem[];
    mode?: NavMode;
    className?: string;
}