"use client";

import styles from "../styles/navigators.module.css";
import {MenuItemIcon, MenuItemLink} from "../components";
import React, {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {MenuItem} from "../libs";
import {isCandidateToActive} from "@smap-dev/sdk/navigator/libs/navigator.utils";
import {RenderItemNavigatorProps} from "@smap-dev/sdk/navigator/libs/navigator.internal.types";

export function MenuItemSubmenu(props: RenderItemNavigatorProps) {
    const pathname = usePathname();
    const {item, index, closeMenu, onClick, isOpen, features} = props;
    const [mostrarSubmenu, setMostrarSubmenu] = useState( isOpen || pathname.startsWith(item.slug));
    const fletxes = (mostrarSubmenu) ? "collapsar" : "desplegar";
    const isActive = isCandidateToActive(pathname, item.slug);



    const handleParentClick = (e: React.MouseEvent) => {
        // Evitem la navegació dels enllaços si el Submenu és de la navbar
        if (features.model === "NAVBAR") {
            e.preventDefault();
        }
        setMostrarSubmenu(isOpen || false);
        if (onClick) {
            onClick(index);
        } // Lògica de desplegament/tancament
    };
    
    return (
        <div className={styles.SubmenuContainer}>
            <div className={styles.MenuItemLink} >
                    {
                        item.icon && <MenuItemIcon iconKey={item.icon}/>
                    }
                {
                    features.model === "SIDEBAR" ?
                        <>
                        {item.label}
                        <Link href={item.slug} onClick={handleParentClick}>
                            &nbsp;<MenuItemIcon iconKey={fletxes}/>
                        </Link>
                        </>
                        :
                        <>
                            <Link href={item.slug} onClick={handleParentClick}>
                                {item.label}
                                &nbsp;<MenuItemIcon iconKey={fletxes}/>
                            </Link>
                        </>
                }

            </div>
            {/* El Submenú (Dropdown) */}
            {mostrarSubmenu && (
                <div className={styles.MenuSubmenuOptions} data-is-open={isOpen} data-active={isActive}>
                    {item.options?.map((option: MenuItem, subIndex: number) => (
                        <MenuItemLink
                            index={index}
                            key={subIndex}
                            item={option}
                            onClick={closeMenu}
                            features={features}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};