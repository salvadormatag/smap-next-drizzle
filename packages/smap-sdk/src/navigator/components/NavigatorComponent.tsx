import {NavigatorComponentProps} from "../libs";
import {Navbar, Sidebar} from "../controllers";
import React from "react";

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