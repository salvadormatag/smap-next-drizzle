import {NavigatorComponentProps} from "@smap-dev/sdk/navigator/libs/navigator.types";
import styles from "@smap-dev/sdk/navigator/styles/navigators.module.css";
import {NavigatorController} from "@smap-dev/sdk/navigator/NavigatorController";

export function NavigatorComponent(props: NavigatorComponentProps) {

    const {features} = props;
    const css = features.model === "NAVBAR"
        ? styles.navigator_navbar
        : styles.navigator_sidebar

    return (
        <div className={css}>
            <NavigatorController {...props} />
        </div>
    );
}