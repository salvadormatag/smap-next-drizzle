"use client"

import React, { useState, useEffect, useRef } from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import {isCandidateToActive, MenuItemTypes, NavigatorComponentProps} from "../libs";
import styles from "../styles/navigators.module.css";
import {MenuItemSubmenu} from "../components";

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
        <div ref={navRef} className={styles.ItemNavigator}>
            {items.map((item, index) => {
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
                                if (item.type !== MenuItemTypes.SINGLE_LINK) {
                                    e.preventDefault();
                                }
                                handleLinkClick(index);
                            }}
                        >
                            {item.label}
                        </Link>
                        {/* Renderitzar submenú si l'índex coincideix */}
                        {   openIndex === index && item.options && (<MenuItemSubmenu {...submenuProps}  />)}
                    </div>
                )})}
        </div>
    );
};