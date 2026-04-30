import {NavigatorConfig, NavItem, NavMode} from "./navigator.interfaces";

export class SmapNavigator {
    public items: NavItem[];
    public mode: NavMode;
    public className: string;
    
    constructor(config: NavigatorConfig) {
        this.items = config.items;
        this.mode = config.mode || 'navbar';
        this.className = config.className || '';
    }
    
    /**
     * Mètode per validar si un ítem està actiu.
     * Útil si el client vol lògica personalitzada.
     */
    public isActive(id: string, currentPage: string): boolean {
        return id === currentPage;
    }
    
    /**
     * Genera les classes CSS segons el mode i l'estat.
     */
    public getContainerClasses(): string {
        const base = this.mode === 'sidebar'
            ? 'flex flex-col w-64 h-full'
            : 'flex flex-row w-full h-16';
        return `${base} ${this.className}`.trim();
    }
}