import { SmapValidators } from "../validators";
import { ErrorCodes, getErrorCode } from "@/packages/smap-sdk/src/errors/ErrorCodes";
import { SmapLocales } from "./SmapInstantsFormatters";

export enum UnitsDate {
    Days = "days",
    Hours = "hours",
    Minutes = "minutes",
    Months = "months",
    Seconds = "seconds",
    Weeks = "weeks",
    Years = "years",
}

/**
 * SmapInstants: Motor de càlcul i parseig de dates.
 * Versió professional amb gestió de desbordaments i Singleton segur.
 */
class SmapInstants {
    private static instance: SmapInstants;
    private currentLocale: SmapLocales = SmapLocales.CAT;

    private constructor() {}

    public static getInstance(): SmapInstants {
        if (!SmapInstants.instance) SmapInstants.instance = new SmapInstants();
        return SmapInstants.instance;
    }

    // --- Configuració ---
    public setLocale(locale: SmapLocales): void { this.currentLocale = locale; }
    public getLocale(): SmapLocales { return this.currentLocale; }

    // --- Core Parsing ---

    /**
     * Centralitza la creació de dates. Si falla, llança error o retorna 'ara'.
     * PRO: Separa la validació de la transformació.
     */
    private toDate(moment: Date | string | number | null | undefined): Date {
        if (moment === null || moment === undefined) return new Date();

        if (moment instanceof Date) {
            if (isNaN(moment.getTime())) throw new Error(`${getErrorCode(ErrorCodes.WrongParam)} Date invàlid.`);
            return new Date(moment.getTime()); // Retornem còpia per immutabilitat
        }

        if (typeof moment === "number") {
            if (!SmapValidators.isValidTimestamp(moment)) throw new Error(`${getErrorCode(ErrorCodes.WrongParam)} Timestamp invàlid.`);
            return new Date(moment);
        }

        const parsed = this.parserStringToDate(moment);
        return parsed || new Date();
    }

    /**
     * Regex millorada per suportar el format segons locale si calgués,
     * tot i que ara forcem el format estàndard del SDK.
     */
    private parserStringToDate(moment: string): Date | null {
        const trimmed = moment.trim();
        if (!trimmed) return null;

        const matcher = /^(\d{1,2})[./-](\d{1,2})[./-](\d{4})(?:\s+(\d{1,2}):(\d{1,2}):(\d{1,2}))?$/;
        const match = trimmed.match(matcher);

        if (!match) {
            const native = new Date(trimmed);
            if (!isNaN(native.getTime())) return native;
            throw new Error(`${getErrorCode(ErrorCodes.WrongParam)} Format no reconegut: ${moment}`);
        }

        const [d, m, y, h, min, sec] = match.slice(1).map(Number);

        if (!SmapValidators.isValidCalendarDate(d, m, y)) {
            throw new Error(`${getErrorCode(ErrorCodes.OutOfRange)} Data impossible: ${moment}`);
        }

        return new Date(y, m - 1, d, h || 0, min || 0, sec || 0);
    }

    // --- Operacions ---

    public getElapsedDays(prev: Date, next: Date): number {
        const diff = Math.abs(this.toDate(next).getTime() - this.toDate(prev).getTime());
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    /**
     * PRO: Gestió de desbordament de mesos (Feb 31 -> Feb 28/29)
     */
    public add(date: Date, qty: number, unit: UnitsDate): Date {
        const res = new Date(date.getTime());

        switch (unit) {
            case UnitsDate.Seconds: res.setSeconds(res.getSeconds() + qty); break;
            case UnitsDate.Minutes: res.setMinutes(res.getMinutes() + qty); break;
            case UnitsDate.Hours:   res.setHours(res.getHours() + qty); break;
            case UnitsDate.Days:    res.setDate(res.getDate() + qty); break;
            case UnitsDate.Weeks:   res.setDate(res.getDate() + (qty * 7)); break;
            case UnitsDate.Years:   res.setFullYear(res.getFullYear() + qty); break;
            case UnitsDate.Months: {
                const dayBefore = res.getDate();
                res.setMonth(res.getMonth() + qty);
                // Si el dia ha canviat (p.ex de 31 a 2 de març), rectifiquem a l'últim dia del mes anterior
                if (res.getDate() !== dayBefore) res.setDate(0);
                break;
            }
        }
        return res;
    }

    public substract(date: Date, qty: number, unit: UnitsDate): Date {
        const res = new Date(date.getTime());

        switch (unit) {
            case UnitsDate.Seconds: res.setSeconds(res.getSeconds() - qty); break;
            case UnitsDate.Minutes: res.setMinutes(res.getMinutes() - qty); break;
            case UnitsDate.Hours:   res.setHours(res.getHours() - qty); break;
            case UnitsDate.Days:    res.setDate(res.getDate() - qty); break;
            case UnitsDate.Weeks:   res.setDate(res.getDate() - (qty * 7)); break;
            case UnitsDate.Years:   res.setFullYear(res.getFullYear() - qty); break;
            case UnitsDate.Months: {
                const dayBefore = res.getDate();
                res.setMonth(res.getMonth() - qty);
                // Si el dia ha canviat (p.ex de 31 a 2 de març), rectifiquem a l'últim dia del mes anterior
                if (res.getDate() !== dayBefore) res.setDate(0);
                break;
            }
        }
        return res;
    }

    // Façanes (Aliases per comoditat del dev)
    public fromString(moment: string): Date { return this.toDate(moment); }
}

const skeleton = SmapInstants.getInstance();
export { skeleton as SmapInstants };