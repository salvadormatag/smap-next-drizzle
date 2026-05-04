import {CodeBlock} from "@smap-dev/sdk/code";

export default async function HomePageExemples() {

    const codes = {
        figura1: '<SmapNavigatorComponent mode={"navbar"} items={LlistatItemsMenuLlocWeb} />',
    };

    return (
        <div>

            <h1>Pàgina principal dels exemples de SmapAuth</h1>
            <p>
                El mòdul <b>navigator</b> del <b>smap-dev/sdk</b> ofereix dos components per facilitar-vos la
                navegabilitat.
                Disponible en dos formats (com els que veiem i usem en aquest propi lloc web):
            </p>
            <ul>
                <li>
                    Navbar
                </li>
                <li>
                    Sidebar
                </li>
            </ul>
            <p>
                Només hem de passar-li per paràmetres un llistat de MenuItem i el tipus (navbar o sidebar) i el component,
                s'encarregarà de la resta.
            </p>
            <CodeBlock code={codes.figura1} lang={"ts"} />
        </div>
    );
}

