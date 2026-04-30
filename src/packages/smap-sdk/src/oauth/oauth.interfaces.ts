import {SmapLocales} from "../instants";

export enum SmapUserRole {
    ADMIN = 'admin',
    EDITOR = 'editor',
    VIEWER = 'viewer',
    GUEST = 'guest'
}

export interface SmapUser {
    id: string;              // UUID de la base de dades
    email: string;           // Identificador principal
    displayName: string;     // Nom humà (ex: "Josep Lluís")
    role: SmapUserRole;      // Autorització (què pot fer?)
    locale: SmapLocales;     // El teu enum d'ahir (idioma preferit)
    createdAt: Date;         // Data de registre
    lastLogin: Date;         // Última connexió
    isTwoFactorEnabled: boolean; // Per a la Fase 2 del 2FA
}

export interface SmapCredentials {
    email: string;
    password: string; // En el client serà text pla, però al SDK la xifrarem
}

export enum SmapPasswordStrength {
    WEAK = 0,      // Vermell
    FAIR = 1,      // Taronja
    GOOD = 2,      // Groc/Blau
    STRONG = 3,    // Verd
    SHOGUN = 4     // Verd brillant (màxim nivell!)
}