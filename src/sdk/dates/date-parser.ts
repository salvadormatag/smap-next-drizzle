/** 1. La validació del format vàlid (previ al parser) */
const isValidCalendarDate = (d: number, m: number, y: number): boolean => {
    const test = new Date(y, m - 1, d, 12, 0, 0);
    return test.getFullYear() === y && test.getMonth() === m - 1 && test.getDate() === d;
};

/** 3. EL PARSER: String Català -> Date (Segur per a Drizzle) */
export const parseWebDateToDate = (input: string | number | Date | null): Date | null => {
    if (!input) return null;
    if (input instanceof Date) return input;
    if (typeof input === 'number') return new Date(input);
    
    const match = input.trim().match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})(?:\s+(\d{1,2}):(\d{1,2}):(\d{1,2}))?$/);
    if (!match) throw new Error(`Format no reconegut: ${input}`);
    
    // const [fullMatch, d, m, y, h, min, sec]
    // Fem un split perquè l'element zero (el match complert) no ens cal per res
    const [d, m, y, h, min, sec]= match.slice(1).map(Number);
    if (!isValidCalendarDate(d, m, y)) throw new Error(`Data impossible: ${input}`);
    
    return new Date(y, m - 1, d, h || 0, min || 0, sec || 0);
};