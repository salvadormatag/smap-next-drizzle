import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
// import {NavigatorComponent, NavigatorComponentProps} from "@smap-dev/sdk/navigator";
import {LlistatItemsMenuLlocWeb} from "@/app/lib/ItemsNavigator";
import {NavigatorComponentProps} from "@smap-dev/sdk/navigator";

const montserrat = Montserrat({
  variable: "--font-sistema",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Casos pràctics NextJS", // El %s és el comodí
    default: "Salvador Mata | Backend Developer",      // Si la pàgina no té títol
  },
  description: "Projecte personal d'autodidacta amb NextJS 16, tailwinds, zod i drizzle (per postgresql)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const props: NavigatorComponentProps = {
    items: LlistatItemsMenuLlocWeb,
    features: {
      opened: false,
      collapsed: true,
      model: "NAVBAR"
    },
  };

  return (
    <html lang="ca"
      className={`${montserrat.variable} h-full antialiased dark`}
          suppressHydrationWarning={true}
    >
      <body className="min-h-full flex flex-col dark">
        <div className="flex flex-col w-full">
          <NavigatorComponent {...props} />
          {children}
        </div>
      </body>
    </html>
  );
}
