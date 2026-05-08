import {execSync} from "child_process";

export function syncSchema() {
    execSync("drizzle-kit push", {stdio: "inherit"});
}


