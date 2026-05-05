"use client"

import React, {useState, useMemo} from 'react';
import {NavigatorComponentProps} from '../libs';
import {usePathname} from "next/navigation";
import styles from "@smap-dev/sdk/navigator/styles/navigators.module.css";

export const Sidebar: React.FC<NavigatorComponentProps> = ({ items }) => {
    
    const pathname = usePathname();
    
    // 1. Calculem quin pare conté la ruta actual (Estat Derivat)
    const activeParentIndex = useMemo(() => {
        return items.findIndex(item => {
            if (item.slug === pathname) return true;
            return item.options?.some(subItem => subItem.slug === pathname);
        });
    }, [items, pathname]);
    
    // 2. L'estat 'manualIndex' només guarda si l'usuari ha clicat expressament per obrir/tancar
    const [manualIndex, setManualIndex] = useState<number | null>(null);
    
    // 3. Decidim quin índex es renderitza com a obert:
    // Prioritat: 1. El que l'usuari ha clicat manualment | 2. El que toca per URL (F5)
    const openIndex = manualIndex !== null ? manualIndex : (activeParentIndex !== -1 ? activeParentIndex : null);
    
    const handleToggle = (index: number) => {
        // Si cliquem el que ja està obert, el tanquem manualment posant un valor que no sigui cap índex (ex: -1).
        if (openIndex === index) {
            setManualIndex(-1);
        } else {
            setManualIndex(index);
        }
    };
    
    return (
        <div  className={styles.navigator_sidebar}>
            {items.map((item, index) => {
                // Un ítem està obert si l'usuari l'ha obert manualment
                // O si és el que toca per l'URL actual (només en el primer render).
                const isItemOpen = openIndex === index;
                
                return (
                    <div key={index}>
                        <div onClick={() => handleToggle(index)}>
                            <a href={item.slug}>{item.label}</a>
                        </div>
                        {isItemOpen && item.options && (
                            <ul>
                                {item.options.map(opt => (
                                    <li key={opt.slug}>
                                        <a href={opt.slug}>{opt.label}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
};