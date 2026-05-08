import Link from "next/link";

interface Item {
    name: string;
    href: string;
}

export default function Smap() {
    const items = [];
    for(let i: number = 1; i <= 10; i++ ) {
        items.push({
            name: `Item ${i}`,
            href: `smap/${i}`
        });
    }
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1>Pàgina sense CSS</h1>
            <div>
                <h3>Llista de Links</h3>
                <ul>
                {
                    items.map((item: Item, key) => (
                        <li key={key}>
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    );
}
