"use client"

import {MenuItemLinkProps} from "../libs/navigator.types";
import styles from "../styles/navigators.module.css";
import Link from "next/link";
import MenuItemIcon from "../components/MenuItemIcon";
import {usePathname} from "next/navigation";
import {isCandidateToActive} from "../libs/smap.navigator.utils";

export default function RenderItemNavigator(props: MenuItemLinkProps){
    const {label, href, icon, onClick, mode} = props;
    const pathname = usePathname();
    console.log("MenuItemLink", pathname);
    const isActive = isCandidateToActive(pathname, href);
    const paginaActiva = "marcadorPaginaActiva";
    
    const iconLink = {
        icon: isActive ? paginaActiva : icon,
        styles: isActive ? "active" : "",
    };
    
    return (
        <div className={styles.MenuItemLink} onClick={onClick} data-active={isActive}>
            <Link href={href} className={styles.MenuLink}>
                <MenuItemIcon iconKey={iconLink?.icon || "bug"} />
                {label}
            </Link>
        </div>
    );
}