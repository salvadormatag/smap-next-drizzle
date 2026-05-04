"use client";

import styles from "../styles/navigators.module.css";
import Link from "next/link";
import {MenuItemIcon} from "../components";
import {usePathname} from "next/navigation";
import {isCandidateToActive} from "../libs/navigator.utils";
import {
    RenderItemNavigatorProps
} from "@smap-dev/sdk/navigator/libs/navigator.internal.types";


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