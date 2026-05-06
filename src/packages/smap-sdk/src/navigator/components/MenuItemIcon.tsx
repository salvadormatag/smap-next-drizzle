import styles from "../styles/Commons.module.scss";
import {MenuItemIconProps, NavigatorIconsLibrary} from "../libs";

export function MenuItemIcon(props: MenuItemIconProps) {
    const key = props.iconKey || "bug"; // key s'infereix com IconKey
    const IconComponent = NavigatorIconsLibrary[key];
    return <IconComponent className={styles.navIcon} />
}