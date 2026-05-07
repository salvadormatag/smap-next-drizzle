"use client";

import React from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

import styles from "../styles/navigator.module.css";
import {isCandidateToActive, MenuItem, SubmenuProps} from "../libs";
import {MenuItemIcon} from "../components";

export function MenuItemSubmenu(props: SubmenuProps) {
    const pathname = usePathname();
    const {item, onClick} = props;
    
    return (
        <>
            {item.options?.map((option: MenuItem, subIndex: number) => {
                const isActive = isCandidateToActive(pathname, option.slug);
                const paginaActiva = "marcadorPaginaActiva";
                const iconLink = {
                    icon: isActive ? paginaActiva : option.icon,
                    styles: isActive ? "active" : "",
                };
                return(
                    <div className={styles.MenuItemLink}
                         key={subIndex}
                         data-active={isActive}
                    >
                        <Link href={option.slug}
                              className={styles.MenuLink}
                              onClick={() => onClick ? onClick(subIndex) : null}
                        >
                            <MenuItemIcon iconKey={iconLink?.icon || "bug"} isActive={isActive} />
                            {option.label}
                        </Link>
                    </div>)
            })}
        </>
    );
}