export default async function Page({params,}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params;
    return (
        <div>
            <h1>Exemple de SmapAuth: <b>{slug}</b></h1>
        </div>
    );
}