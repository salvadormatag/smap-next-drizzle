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

            <h1 className="text-2xl font-bold accent-blue-700">Mòdul navigator</h1>
            <p className="mt-4">
                El mòdul <b>navigator</b> del <b>smap-dev/sdk</b> ofereix dos components per facilitar la
                navegabilitat, disponibles en dos formats <i>(com els que veiem i usem en aquest propi lloc web):</i>
            </p>
            <ul className="mt-4">
                <li>
                    <b>Navbar</b>
                </li>
                <li>
                    <b>Sidebar</b>
                </li>
            </ul>
            <p className="mt-4 mb-4">
                El component espera un llistat de <b>MenuItem</b> per renderitzar els elements de navegació.
            </p>
            <CodeBlock code={codes.interficie} lang={"ts"} />
            <p className="mt-4 mb-4 text-red-900">
                (*) Els camps requerits són:
            </p>
            <ul className="mt-4">
                <li>
                    <b>label:</b> El text que es mostrarà en el Link/Botó.
                </li>
                <li>
                    <b>slug:</b> L'URL relatiu de la pàgina on es dirigeix <b>(page.tsx)</b>.
                </li>
                <li>
                    <b>type (MenuItemTypes):</b> el tipus de component què és.
                </li>
            </ul>
        </div>
    );
}

