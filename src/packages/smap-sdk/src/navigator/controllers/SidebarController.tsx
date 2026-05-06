"use client"

import React, {useState, useMemo} from 'react';
import {isCandidateToActive, NavigatorComponentProps} from '../libs';
import {usePathname} from "next/navigation";
import styles from "../styles/Sidebar.module.scss";
import Link from "next/link";
import {MenuItemIcon, MenuItemSubmenu} from "../components";

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
    const openIndex = manualIndex !== null
        ? manualIndex
        : (activeParentIndex !== -1
            ? activeParentIndex
            : null
        );
    
    const handleToggle = (index: number) => {
        // Si cliquem el que ja està obert, el tanquem manualment posant un valor que no sigui cap índex (ex: -1).
        if (openIndex === index) {
            setManualIndex(-1);
        } else {
            setManualIndex(index);
        }
    };
    
    return (
        <div className={styles.navigator_sidebar}>
            <div className={styles.ItemNavigator}>
            {
                items.map((item, index) => {
                    // Un ítem està obert si l'usuari l'ha obert manualment
                    // O si és el que toca per l'URL actual (només en el primer render).
                    const isItemOpen = openIndex === index;
                    const isActive = isCandidateToActive(pathname, item.slug);
                    const paginaActiva = "marcadorPaginaActiva";
                    const iconLink = {
                        icon: isActive ? paginaActiva : item.icon,
                        styles: isActive ? "active" : "",
                    };
                    const submenuProps = {
                        item: item,
                    };
                    
                    return (
                        <div key={index} className={styles.MenuItemLinkSidebar} data-active={isActive}>
                            <div
                                 className={styles.MenuItemLink}
                                 data-active={isActive}
                            >
                                <Link href={item.slug}>
                                    <MenuItemIcon iconKey={iconLink?.icon || "bug"} />
                                    {item.label}
                                </Link>
                            </div>
                            {
                                isItemOpen && item.options && (
                                    <MenuItemSubmenu {...submenuProps} />
                                )
                            }
                        </div>
                    );
                })
            }
        </div>
        </div>
    );
};