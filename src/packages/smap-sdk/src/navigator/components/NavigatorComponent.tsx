import {NavigatorComponentProps} from "../libs";
import {Navbar, Sidebar} from "../controllers";

export function NavigatorComponent(props: NavigatorComponentProps) {
    const {features} = props;
    return (
        <>
            {
                features.model === "NAVBAR"
                    ? <Navbar {...props} />
                    : <Sidebar {...props} />
            }
        </>
    );
}