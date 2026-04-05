import Link from "next/link";

export default async function SmapById(props: { params: Promise<{ id: string }> }) {
    
    const params = await props.params;
    const id = params.id;
    
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1>Pàgina sense CSS</h1>
            <div>
                <h3>Pàgina del ítem amb ID: {id}</h3>
            </div>
            <Link href={`/smap`}>Tornar enrere</Link>
        </div>
    );
}
