import styles from "../styles/navigators.module.css";
import {MenuItemsController} from "./MenuItemsController";
import {NavbarComponentProps} from "../libs/navigator.types";


/**
 * Renderitza un component de navegació horitzontal.
 * Per defecte, a tota l'amplada de la pantalla.
 *
 * @constructor
 */
export const SmapNavbar = ({items}: NavbarComponentProps) => {
    return (
        <div className={styles.navigator_navbar}>
            <MenuItemsController items={items} mode={"navbar"} />
        </div>
    )
}
