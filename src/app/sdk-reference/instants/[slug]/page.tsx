export default async function Page({params,}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params;
    return (
        <div>
            <h1>Referències del mòdul instants: <b>{slug}</b></h1>
        </div>
    );
}