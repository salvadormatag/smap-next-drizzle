export class SmapValidators {
    static isValidTimestamp(timestamp: number): boolean {
        // 1. Comprovem que sigui un número finit (no NaN ni Infinity)
        if (!Number.isFinite(timestamp)) {
            return false;
        }

        // 2. Comprovem el rang oficial de dates de JavaScript:
        // +/- 8,640,000,000,000,000 mil·lisegons
        const MAX_JS_DATE = 8640000000000000;

        return Math.abs(timestamp) <= MAX_JS_DATE;
    }

    static isValidCalendarDate (d: number, m: number, y: number): boolean {
        const test = new Date(y, m - 1, d, 12, 0, 0);
        return test.getFullYear() === y && test.getMonth() === m - 1 && test.getDate() === d;
    }
}