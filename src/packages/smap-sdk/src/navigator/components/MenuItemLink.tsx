"use client";

import {MenuItemLinkActiveProps} from "../libs/navigator.types";
import styles from "../styles/navigators.module.css";
import Link from "next/link";
import MenuItemIcon from "../components/MenuItemIcon";
import {usePathname} from "next/navigation";


export default function MenuItemLink(props: MenuItemLinkActiveProps) {

    const {label, href, icon, onClick} = props;
    const isActive = usePathname() === href;
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