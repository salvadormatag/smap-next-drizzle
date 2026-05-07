"use client"

import React, { useState, useEffect, useRef } from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import {isCandidateToActive, MenuItemTypes, NavigatorComponentProps} from "../libs";
import styles from "../styles/navigator.module.css";
import {MenuItemIcon, MenuItemSubmenu} from "../components";

export const Navbar: React.FC<NavigatorComponentProps> = ({ items }) => {
    const pathname = usePathname();
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    
    // Tancar si cliquem fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    
    const handleLinkClick = (index: number) => {
        // Si tornem a clicar el mateix, es tanca. Si cliquem un altre, canvia.
        setOpenIndex(openIndex === index ? null : index);
    };
    
    return (
        <div ref={navRef} className={styles.navigator_navbar}>
            <div className={styles.ItemNavigator}>
                {items.map((item, index) => {
                    const submenuAvailable = openIndex === index && item.options !== undefined;
                    const arrow = submenuAvailable ? "collapsar" : "desplegar";
                    const isActive = isCandidateToActive(pathname, item.slug);
                    const submenuProps = {
                        item: item,
                        onClick: handleLinkClick
                    };
                    return (
                        <div key={index}
                             className={styles.MenuItemLink}
                             data-active={isActive}
                        >
                            <Link
                                href={item.slug}
                                onClick={(e) => {
                                    if (item.type === MenuItemTypes.ONLY_OPTIONS) {
                                        e.preventDefault();
                                    }
                                    handleLinkClick(index);
                                }}
                            >
                                {item.label}
                                {/* Renderitzar fletxa indicadora si submenu està disponible */}
                                {
                                    item.options && (<>
                                        &nbsp;<MenuItemIcon iconKey={arrow} isActive={isActive} />
                                    </>)
                                }
                            </Link>
                            {/* Renderitzar submenú si les condicions ho determinen */}
                                {   submenuAvailable && (
                                    <div className={styles.MenuSubmenuOptions} data-render={"SubmenuContainer"}>
                                        <MenuItemSubmenu {...submenuProps}  />
                                    </div>)}
                        </div>
                    )})}
            </div>
        </div>
    );
};