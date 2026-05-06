"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

import styles from "../styles/Commons.module.scss";
import {MenuItemIcon} from "../components";
import {isCandidateToActive, RenderItemNavigatorProps} from "../libs";

export function MenuItemLink(props: RenderItemNavigatorProps) {

    const {index, item, features} = props;
    const pathname = usePathname();
    const isActive = isCandidateToActive(pathname, item.slug);
    const paginaActiva = "marcadorPaginaActiva";

    const iconLink = {
        icon: isActive ? paginaActiva : item.icon,
        styles: isActive ? "active" : "",
    };

    return (
        <div className={styles.MenuItemLink}
             data-active={isActive}
             data-renderitzat={"MenuItemLink"}
        >
            <Link href={item.slug} className={styles.MenuLink}>
                <MenuItemIcon iconKey={iconLink?.icon || "bug"} />
                {item.label}
            </Link>
        </div>
    );
}