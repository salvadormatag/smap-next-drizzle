import styles from "../styles/navigator.module.css";
import {MenuItemIconProps, NavigatorIconsLibrary} from "../libs";
import {cn} from "../../libs/utils";
import React from "react";

export function MenuItemIcon(props: MenuItemIconProps) {
    const key = props.iconKey || "bug"; // key s'infereix com IconKey
    const IconComponent = NavigatorIconsLibrary[key];
    return <IconComponent className={cn(
        styles.navIcon, // Classe base sempre present
        props.isActive && styles.navIconActive // El que s'aplica si és actiu
    )} />
}