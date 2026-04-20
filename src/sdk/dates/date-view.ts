export const LOCALES = "ca-ES";

// 1. Definim les opcions com a constants immutables fora de les funcions
const BASE_OPTIONS = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
} as const satisfies Intl.DateTimeFormatOptions;

const LONG_DAY_OPTIONS = {
    ...BASE_OPTIONS,
    weekday: 'long',
} as const satisfies Intl.DateTimeFormatOptions;

const FULL_DATE_OPTIONS = {
    ...BASE_OPTIONS,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
} as const satisfies Intl.DateTimeFormatOptions;

const FULL_DATE_OPTIONS_WITH_TIME = {
    ...LONG_DAY_OPTIONS,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
} as const satisfies Intl.DateTimeFormatOptions;

// 2. Instanciem els formatadors una sola vegada (millor rendiment)
const baseFormatter = new Intl.DateTimeFormat(LOCALES, BASE_OPTIONS);
const longDayFormatter = new Intl.DateTimeFormat(LOCALES, LONG_DAY_OPTIONS);
const fullDateFormatter = new Intl.DateTimeFormat(LOCALES, FULL_DATE_OPTIONS);
const longDayFullDateFormatter = new Intl.DateTimeFormat(LOCALES, FULL_DATE_OPTIONS_WITH_TIME);

// 3. Helpers nets i ràpids
export const getDateFormatWebFromDB = (date: Date | null) => {
    if (!date) return null;
    return baseFormatter.format(date);
};

export const getDateFormatWebFromDBWithLongDay = (date: Date | null) => {
    if (!date) return null;
    return longDayFormatter.format(date);
};

export const getFullDateFormatWebFromDB = (date: Date | null) => {
    if (!date) return null;
    return fullDateFormatter.format(date);
}

export const getFullDateFormatWebFromDBWithLongDay = (date: Date | null) => {
    if (!date) return null;
    return longDayFullDateFormatter.format(date);
}
