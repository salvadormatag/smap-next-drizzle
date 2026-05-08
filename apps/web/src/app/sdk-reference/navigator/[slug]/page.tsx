export default async function Page({params,}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params;
    return (
        <div>
            <h1><b>Mòdul navigator:</b> <i>{slug}</i></h1>
        </div>
    );
}