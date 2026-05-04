"use client"

import styles from "./styles/navigators.module.css";
import React, { useEffect, useRef, useState, useCallback } from "react";
import {RenderItemsProps} from "./libs/navigator.types";
import MenuItemLink from "./components/MenuItemLink";
import MenuItemSubmenu from "./components/MenuItemSubmenu";
import RenderItemNavigator from "@smap-dev/sdk/navigator/components/RenderItemNavigator";

export const MenuItemsController: React.FC<RenderItemsProps> = ({ items, mode }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const handleItemClick = useCallback((index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    }, []);

    const closeMenu = useCallback(() => {
        if (mode !== "sidebar"){
            setOpenIndex(null);
        }
    }, [mode]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node) && mode !== "sidebar" ) {
                closeMenu();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [closeMenu, mode]); // closeMenu és estable gràcies a useCallback

    return (
        <div ref={menuRef} className={styles.ItemNavigator}>
            
            {
                /*
                    Iterem la llista d'ítems i els renderitzem segons la seva naturalesa
                */
            }
            {items.map((item, index) => {
                
                return (
                    <RenderItemNavigator
                        key={index}
                        label={item.label}
                        href={item.slug}
                        icon={item?.icon}
                        mode={mode}
                    />
                );
                
                
                // // Si l'ítem no conté options, és un link senzill
                // if (!('options' in item) ) {
                //     return (
                //         <MenuItemLink
                //             key={index}
                //             label={item.label}
                //             href={item.slug}
                //             icon={item?.icon}
                //             mode={mode}
                //         />
                //     );
                // // Si l'ítem conté el node menu
                // } else if ( ('menu' in item) ){
                //
                // }
                //
                // return (
                //     <MenuItemSubmenu
                //         key={index}
                //         item={item}
                //         menu={item.slug}
                //         href={item.slug}
                //         index={index}
                //         isOpen={openIndex === index}
                //         onClick={handleItemClick}
                //         closeMenu={closeMenu}
                //         mode={mode}
                //     />
                // )
            })}
        </div>
    );
}