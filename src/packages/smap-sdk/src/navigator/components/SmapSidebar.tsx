import styles from "../styles/navigators.module.css";
import {SidebarComponentProps} from "../libs/navigator.types";
import {MenuItemsController} from "../MenuItemsController";
/**
 * Renderitza un component de navegació vertical. Per defecte, al costat esquerra de la pantalla.
 *
 * @constructor
 */
export const SmapSidebar = ({items}: SidebarComponentProps) => {
    return (
        <div className={styles.navigator_sidebar}>
            <MenuItemsController items={items} mode={"sidebar"} />
        </div>
    )
}
