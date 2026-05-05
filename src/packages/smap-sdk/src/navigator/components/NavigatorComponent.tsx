import {NavigatorComponentProps} from "../libs";
import styles from "../styles/navigators.module.css";
import {Navbar, Sidebar} from "../controllers";

export function NavigatorComponent(props: NavigatorComponentProps) {

    const {features} = props;
    const css = features.model === "NAVBAR"
        ? styles.navigator_navbar
        : styles.navigator_sidebar

    return (
        <div className={css}>
            {
                features.model === "NAVBAR"
                    ? <Navbar {...props} />
                    : <Sidebar {...props} />
            }
        </div>
    );
}