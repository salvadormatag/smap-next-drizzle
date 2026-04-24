import {SmapDate} from "@smap-dev/sdk";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Exemples d'ús del smap-dev SDK",
}

export default function Home() {
  
  const actualDateFromMySDK = SmapDate.full(new Date());
  
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
            Hello Gemini en: <b>{actualDateFromMySDK}</b>
        </div>
      </main>
    </div>
  );
}
