"use client";
import {usePathname} from "next/navigation";
import styles from "@smap-dev/sdk/navigator/styles/navigators.module.css";
import {MenuItem} from "@smap-dev/sdk/navigator";
import {isCandidateToActive} from "@smap-dev/sdk/navigator/libs/navigator.utils";
import Link from "next/link";
import {MenuItemIcon} from "@smap-dev/sdk/navigator/components/MenuItemIcon";
import React from "react";
import {SubmenuProps} from "../libs";

export function MenuItemSubmenu(props: SubmenuProps) {
    const pathname = usePathname();
    const {item, onClick} = props;
    
    return (
        <div className={styles.MenuSubmenuOptions}>
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
                         data-renderitzat={"MenuItemLink"}
                    >
                        <Link href={option.slug}
                              className={styles.MenuLink}
                              onClick={onClick}
                        >
                            <MenuItemIcon iconKey={iconLink?.icon || "bug"} />
                            {option.label}
                        </Link>
                    </div>)
            })}
        </div>
    );
}