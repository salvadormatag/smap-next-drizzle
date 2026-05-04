"use client"

import React, {useCallback, useEffect, useRef, useState} from "react";
import styles from "./styles/navigators.module.css";
import {MenuItemTypes} from "./libs/navigator.types";
import {MenuItemLink, MenuItemSubmenu} from "./components";
import {NavigatorControllerProps, RenderItemNavigatorProps} from "./libs/navigator.internal.types";
import {NavigatorItemLink} from "@smap-dev/sdk/navigator/components/NavigatorItemLink";

export const NavigatorController: React.FC<NavigatorControllerProps> = (props) => {
    // Configurem component i recollim elements
    const {features, items} = props;
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const handleItemClick = useCallback((index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    }, []);

    /**
     * Controlem el tancament del submenu desplegat sí:
     * 1. Es fa click al botó explícit
     * 2. Es fa click a qualsevol lloc de la pantalla.
     */
    const closeMenu = useCallback(() => {
        setOpenIndex(null);
    }, []);

    /**
     * Listener del MouseEvent
     */
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node) ) {
                closeMenu();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [closeMenu, features.model]); // closeMenu és estable gràcies a useCallback

    return (
        <div ref={menuRef} className={styles.ItemNavigator}>

            {items.map((item, index) => {

                const props: RenderItemNavigatorProps = {
                    index: index,
                    item,
                    features
                }

                return (<NavigatorItemLink key={index} {...props} />)
                // // Si l'ítem no conté options, és un link senzill
                // if (item.type === MenuItemTypes.SINGLE_LINK) {
                //     return (<MenuItemLink key={index} {...props} />);
                // }
                // return ( <MenuItemSubmenu key={index} {...props} /> )
            })}
        </div>
    );
}