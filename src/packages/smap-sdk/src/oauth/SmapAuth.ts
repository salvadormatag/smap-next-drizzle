import {SmapCredentials, SmapPasswordStrength, SmapUser, SmapUserRole} from "./oauth.interfaces";

import { hash, verify } from "@node-rs/argon2";
import {SmapAuthSchema} from "../validators";

export class SmapAuth {
    
    /**
     * Valida les credencials abans de processar-les
     */
    public static validateCredentials(data: unknown) {
        const result = SmapAuthSchema.safeParse(data);
        
        if (!result.success) {
            // Aquí pots llançar el teu error personalitzat usant el teu ErrorCodes
            const firstError = result.error.message;
            throw new Error(`[Validació] ${firstError}`);
        }
        
        return result.data; // Retorna les dades netes i tipades
    }
    
    /**
     * Calcula la força de la contrasenya de 0 a 4
     */
    public static getPasswordStrength(password: string): SmapPasswordStrength {
        let score = 0;
        if (!password) return SmapPasswordStrength.WEAK;
        
        // Bonificacions per varietat (Entropia base)
        if (password.length > 8) score++;
        if (password.length > 12) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        
        // Penalitzacions per longitud ridícula
        if (password.length < 6) score = 0;
        
        // Mapat a l'Enum (Max 4)
        if (score <= 2) return SmapPasswordStrength.WEAK;
        if (score === 3) return SmapPasswordStrength.FAIR;
        if (score === 4) return SmapPasswordStrength.GOOD;
        if (password.length >= 14 && score > 4) return SmapPasswordStrength.STRONG;
        if (password.length >= 18 && score > 4) return SmapPasswordStrength.SHOGUN;
        
        return SmapPasswordStrength.WEAK;
    }
    
    /**
     * REGISTRE: Crea un hash segur de la contrasenya.
     */
    public static async hashPassword(password: string): Promise<string> {
        // Argon2 gestiona el 'salt' automàticament i el guarda dins del string resultant
        return await hash(password);
    }
    
    /**
     * INICI DE SESSIÓ: Comprova si la contrasenya és correcta.
     */
    public static async verifyPassword(password: string, hash: string): Promise<boolean> {
        try {
            return await verify(hash, password);
        } catch (e) {
            // Si el hash té un format corrupte o no és vàlid
            return false;
        }
    }
    
    /**
     * Lògica de Login (Exemple de flux)
     */
    public static async authenticate(credentials: SmapCredentials, userFromDb: any): Promise<SmapUser | null> {
        const isValid = await this.verifyPassword(userFromDb.passwordHash, credentials.password);
        
        if (!isValid) return null;
        
        // Si és vàlid, retornem el tipus SmapUser
        return {
            id: userFromDb.id,
            email: userFromDb.email,
            displayName: userFromDb.name,
            role: userFromDb.role as SmapUserRole,
            locale: userFromDb.locale,
            createdAt: new Date(userFromDb.createdAt),
            lastLogin: new Date(),
            isTwoFactorEnabled: !!userFromDb.tfaEnabled
        };
    }
}