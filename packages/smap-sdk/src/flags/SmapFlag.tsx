import * as Flags from 'country-flag-icons/react/3x2';
import EsteladaBlava from "./Estelada";
import {SmapLocales} from "../instants";

export const SmapFlag = ({
                             locale,
                             className = "w-6 h-auto shadow-sm rounded-sm inline-block align-middle"
                         }: {
    locale: SmapLocales,
    className?: string
}) => {
    
    const flagMap: Record<string, React.ElementType> = {
        [SmapLocales.ESP]: Flags.ES,
        [SmapLocales.UK]: Flags.GB,
        [SmapLocales.USA]: Flags.US,
    };
    
    // Si és CAT, servim la nostra Estelada custom
    if (locale === SmapLocales.CAT) {
        return <EsteladaBlava className={className} />;
    }
    
    const FlagComponent = flagMap[locale];
    if (!FlagComponent) return null;
    
    return <FlagComponent className={className} />;
};