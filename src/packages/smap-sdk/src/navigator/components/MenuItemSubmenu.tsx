"use client";

import styles from "../styles/navigators.module.css";
import {SubmenuItemProps} from "../libs/navigator.types";
import MenuItemLink from "../components/MenuItemLink";
import MenuItemIcon from "../components/MenuItemIcon";
import React, {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function MenuItemSubmenu(props: SubmenuItemProps) {
    const pathname = usePathname();
    const {item, index, closeMenu, onClick, isOpen, mode} = props;
    const [mostrarSubmenu, setMostrarSubmenu] = useState( isOpen || pathname.startsWith(item.slug));
    const fletxes = (mostrarSubmenu) ? "collapsar" : "desplegar";



    const handleParentClick = (e: React.MouseEvent) => {
        // Evitem la navegació dels enllaços si el Submenu és de la navbar
        if (mode === "navbar") {
            e.preventDefault();
        }
        setMostrarSubmenu(isOpen);
        onClick(index); // Lògica de desplegament/tancament
    };
    
    return (
        <div className={styles.SubmenuContainer}>
            <div className={styles.MenuItemLink} >
                    {
                        item.icon && <MenuItemIcon iconKey={item.icon}/>
                    }
                {
                    mode === "navbar" ?
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
                <div className={styles.MenuSubmenuOptions} data-is-open={isOpen}>
                    {item.options?.map((option, subIndex) => (
                        <MenuItemLink
                            key={subIndex}
                            href={option.slug}
                            label={option.label}
                            icon={option.icon}
                            onClick={closeMenu}
                            mode={mode}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};