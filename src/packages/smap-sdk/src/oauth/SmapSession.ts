import { SignJWT, jwtVerify } from "jose";
import { SMAP_SESSIONS_CONFIG } from "../config";

export abstract class SmapSession {
    
    // Fem servir una variable privada per guardar la clau un cop processada
    private static cachedKey: Uint8Array | null = null;
    
    private static getSecretKey(): Uint8Array {
        // Si ja la tenim calculada, la retornem (eficiència)
        if (this.cachedKey) return this.cachedKey;
        
        const secret = process.env.SMAP_SESSION_SECRET;
        const isNotSecure = !secret || secret === SMAP_SESSIONS_CONFIG.DEFAULT_KEY_NOT_SECURE;
        
        if (isNotSecure) {
            console.warn(SMAP_SESSIONS_CONFIG.WARNING_NO_ENV_DETECTED);
        }
        
        const finalSecret = isNotSecure
            ? SMAP_SESSIONS_CONFIG.DEFAULT_KEY_NOT_SECURE
            : secret as string;
        
        this.cachedKey = new TextEncoder().encode(finalSecret);
        return this.cachedKey;
    }
    
    public static async createToken(payload: any, expiresIn: string = SMAP_SESSIONS_CONFIG.TOKEN_CADUCITAT): Promise<string> {
        return await new SignJWT(payload)
        .setProtectedHeader({ alg: SMAP_SESSIONS_CONFIG.ALGORITME })
        .setIssuedAt()
        .setExpirationTime(expiresIn)
        .sign(this.getSecretKey()); // <--- USANT EL MÈTODE
    }
    
    public static async verifyToken(token: string): Promise<any | null> {
        try {
            // ARA TOTS DOS USEN LA MATEIXA FONT DE VERITAT
            const { payload } = await jwtVerify(token, this.getSecretKey());
            return payload;
        } catch (error) {
            return null;
        }
    }
}