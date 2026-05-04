import styles from "../styles/navigators.module.css";
import {NavigatorIconsLibrary} from "../libs/NavigatorIconsLibrary";
import {MenuItemIconProps} from "../libs/navigator.types";

export default function MenuItemIcon(props: MenuItemIconProps) {
    const key = props.iconKey || "bug"; // key s'infereix com IconKey
    const IconComponent = NavigatorIconsLibrary[key];

    return <IconComponent className={styles.navIcon} />
}