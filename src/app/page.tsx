import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>SMAP - DRIZZLE - NEXT</h1>
        <p>
          Un projecte de Smap, desenvolupat en NextJS 16 basat en TypeScript on s&apos;utilitza drizzle com a ORM per a
          realitzar operacions CRUD a una BD PostgreSQL.
        </p>
        <p>
          Per veure exemples de funcionalitats, <Link href={"/exemples"} className="text-corpo">anar a aquí</Link>
        </p>
      </main>
    </div>
  );
}
