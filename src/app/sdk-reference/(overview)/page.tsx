import {CodeBlock} from "@smap-dev/sdk/code";

export default async function HomePageExemples() {
    return (
        <div>
            <h1 className="text-2xl mb-12">
                Espai de documentació i exemples de les utilitats incloses en el <b>smap-sdk</b>.
            </h1>

            <h2 className="text-xl mb-6 font-extrabold">Introducció</h2>
            <p className="mb-6 justify-baseline w-5xl">
                El &nbsp;<strong>smap-sdk</strong>&nbsp; ofereix un conjunt d'utilitats per codificar tant
                a&nbsp;<strong>Backend</strong>&nbsp;com a&nbsp;<strong>Frontend</strong>&nbsp; i què es poden
                reutilitzar a qualsevol projecte TypeScript tot i què s'han dissenyat principalment per ser usats en
                projectes de&nbsp;<strong>NextJS versió: &gt; 15</strong>
            </p>

            <h2 className="text-xl mb-6 font-extrabold">Instal·lació</h2>
            <CodeBlock code={"pnpm add @smap-dev/sdk"} lang={"shell"} />
        </div>
    );
}

