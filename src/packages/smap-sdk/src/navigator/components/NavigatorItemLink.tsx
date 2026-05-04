"use client";

import {useState} from "react";
import {RenderItemNavigatorProps} from "@smap-dev/sdk/navigator/libs/navigator.internal.types";
import styles from "@smap-dev/sdk/navigator/styles/navigators.module.css";
import {isCandidateToActive} from "@smap-dev/sdk/navigator/libs/navigator.utils";
import {usePathname} from "next/navigation";
import {MenuItemIcon} from "@smap-dev/sdk/navigator/components/MenuItemIcon";
import Link from "next/link";
import {MenuItemTypes} from "@smap-dev/sdk/navigator";

export function NavigatorItemLink(props: RenderItemNavigatorProps) {

    const {item, index, features} = props;
    const isActive = isCandidateToActive(usePathname(), item.slug);
    const paginaActiva = "marcadorPaginaActiva";
    const iconLink = {
        icon: isActive ? paginaActiva : item.icon,
        styles: isActive ? "active" : "",
    };
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const handlerLinkClick = (e: React.MouseEvent) => {
        if(item.type !== MenuItemTypes.SINGLE_LINK){
            setShowOptions(!showOptions);
        }
    }

    return (
        <div className={styles.MenuItemLink}
             data-active={isActive}
             data-type={item.type}
        >
            <Link href={item.slug}
                  className={styles.MenuLink}
                  onClick={handlerLinkClick}
            >
                <MenuItemIcon iconKey={iconLink?.icon || "bug"} />
                {item.label}
            </Link>
        </div>

    );
}