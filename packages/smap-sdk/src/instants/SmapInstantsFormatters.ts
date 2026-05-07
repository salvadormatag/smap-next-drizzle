export enum SmapLocales {
    CAT = 'ca-ES',
    ESP = 'es-ES',
    UK  = 'en-GB',
    USA = 'en-US'
}

export enum SmapDateFormats {
    short = 1,
    full = 2,
    longDay = 3,
    longDayFull = 4,
    monthShort = 5,
    monthLong = 6,
    monthShortFull = 7,
    monthLongFull = 8,
}

/**
 * Classe PRO per a la gestió de formats de data.
 * Encapsula les opcions i utilitza un cache per optimitzar el rendiment.
 */
export abstract class SmapInstantsFormatter {
    // 1. Encapsulament de configuracions privades
    private static readonly BASE_OPTIONS: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };

    private static readonly FULL_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
        ...this.BASE_OPTIONS,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    // 2. Mapa de formats declaratiu (Substitueix el switch)
    private static readonly FORMAT_CONFIGS: Record<SmapDateFormats, Intl.DateTimeFormatOptions> = {
        [SmapDateFormats.short]:          this.BASE_OPTIONS,
        [SmapDateFormats.full]:           this.FULL_DATE_OPTIONS,
        [SmapDateFormats.longDay]:        { ...this.BASE_OPTIONS, weekday: 'long' },
        [SmapDateFormats.longDayFull]:    { ...this.BASE_OPTIONS, weekday: 'long', hour: "2-digit", minute: "2-digit", second: "2-digit" },
        [SmapDateFormats.monthShort]:     { ...this.BASE_OPTIONS, month: 'short' },
        [SmapDateFormats.monthLong]:      { ...this.BASE_OPTIONS, month: 'long' },
        [SmapDateFormats.monthShortFull]: { ...this.FULL_DATE_OPTIONS, month: 'short' },
        [SmapDateFormats.monthLongFull]:  { ...this.FULL_DATE_OPTIONS, month: 'long' },
    };

    // 3. Cache d'instàncies per evitar recrear objectes Intl (molt car en memòria)
    private static readonly cache = new Map<string, Intl.DateTimeFormat>();

    /**
     * Obté o crea un formatador basat en el locale i el format sol·licitat.
     */
    private static getFormatter(locale: SmapLocales, format: SmapDateFormats): Intl.DateTimeFormat {
        const cacheKey = `${locale}-${format}`;

        // Retornem del cache si ja existeix
        const cached = this.cache.get(cacheKey);
        if (cached) return cached;

        // Si no existeix, el creem i el guardem
        const options = this.FORMAT_CONFIGS[format] || this.BASE_OPTIONS;
        const formatter = new Intl.DateTimeFormat(locale, options);

        this.cache.set(cacheKey, formatter);
        return formatter;
    }
    
    public static format(
        date: Date,
        format: SmapDateFormats = SmapDateFormats.short,
        locale: SmapLocales = SmapLocales.CAT
    ): string {
        return this.getFormatter(locale, format).format(date);
    }
}