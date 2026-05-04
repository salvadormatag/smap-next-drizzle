import {CodeBlock} from "@smap-dev/sdk/code";

export default async function HomePageExemples() {

    const codes = {
        instancies: '' +
            '<SmapToolbar items={LlistatItemsMenuLlocWeb} />' +
            '<SmapSidebar items={LlistatItemsMenuLlocWeb} />',
        interficie: 'export interface MenuItem {\n' +
            '    label: string;\n' +
            '    slug: string | "#";\n' +
            '    options?: MenuItem[];\n' +
            '    icon?: IconKey | "bug";\n' +
            '}',
    };

    return (
        <div>

            <h1>Mòdul <b>navigator</b></h1>
            <p className="mt-4">
                El mòdul <b>navigator</b> del <b>smap-dev/sdk</b> ofereix dos components per facilitar la
                navegabilitat.<br />
                Disponible en dos formats (com els que veiem i usem en aquest propi lloc web):
            </p>
            <ul className="mt-4">
                <li>
                    <b>Toolbar</b>
                </li>
                <li>
                    <b>Sidebar</b>
                </li>
            </ul>
            <p className="mt-4 mb-4">
                Només hem de passar-li per paràmetres un llistat de <b>MenuItem</b> i el component
                s'encarregarà de la resta.
            </p>
            <CodeBlock code={codes.interficie} lang={"ts"} />
        </div>
    );
}

