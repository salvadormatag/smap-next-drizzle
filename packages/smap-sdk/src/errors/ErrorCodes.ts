export enum ErrorCodes {
    WrongParam = "PARAMETRE_NO_VALID",
    UndefinedParam = "PARAMETRE_NO_DEFINIT",
    OutOfRange = "PARAMETRE_FORA_DE_RANG",
}

export const getErrorCode = (code: ErrorCodes): string => {
    return `[${code}]`;
}