/**
 * Configuració d'estàndards de seguretat de Google Authenticator per al procés 2FA.
 */
export const SMAP_2FA_CONFIG = {
    GOOGLE_AUTHENTICATOR: {
        PERIOD: 30,
        DIGITS: 6,
        ALGORITHM: "SHA1"
    },
    BACKUP_CODES_COUNT: 10,
    GRACE_PERIOD: 1,
} as const;