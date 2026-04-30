import type {Metadata} from "next";

export const metadata: Metadata = { title: "Exemples de components" };

export default function ExemplesHomePage(){
    return (
        <div className="flex flex-col flex-12 p-12 bg-zinc-50 font-sans dark:bg-black">
            <h1>Exemples | Home</h1>
        </div>
    );
}

