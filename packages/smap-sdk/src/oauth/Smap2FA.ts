import {createTOTPKeyURI, verifyTOTPWithGracePeriod} from "@oslojs/otp";
import {SMAP_2FA_CONFIG} from "../config";

/**
 * Gestiona el Segon Factor d'Autenticació (TOTP)
 * Segueix els estàndards de Google Authenticator per defecte.
 */
export abstract class Smap2FA {
    
    /**
     * Genera l'URL per crear el codi QR
     */
    public static getQRCodeURL(secret: Uint8Array, accountName: string, issuer: string = "SmapSdk2FA"): string {
        return createTOTPKeyURI(
            issuer,
            accountName,
            secret,
            SMAP_2FA_CONFIG.GOOGLE_AUTHENTICATOR.PERIOD,
            SMAP_2FA_CONFIG.GOOGLE_AUTHENTICATOR.DIGITS
        );
    }
    
    /**
     * Comprova i valida si el token de l'usuari és correcte
     */
    public static verifyToken(token: string, secret: Uint8Array): boolean {
        return verifyTOTPWithGracePeriod(
            secret,
            SMAP_2FA_CONFIG.GOOGLE_AUTHENTICATOR.PERIOD,
            SMAP_2FA_CONFIG.GOOGLE_AUTHENTICATOR.DIGITS,
            token,
            SMAP_2FA_CONFIG.GRACE_PERIOD
        ) !== null;
    }
}