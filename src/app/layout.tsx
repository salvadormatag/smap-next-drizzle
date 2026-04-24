import { Montserrat } from 'next/font/google';
import "./globals.css";
import type { Metadata } from "next";
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', // Definim la variable CSS
});


export const metadata: Metadata = {
  title: {
    template: "%s | Casos pràctics NextJS", // El %s és el comodí
    default: "Casos pràctics NextJS",      // Si la pàgina no té títol
  },
  description: "Projecte personal d'autodidacta amb NextJS 16, tailwinds, zod i drizzle (per postgresql)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
        suppressHydrationWarning
      lang="ca"
      className={`${montserrat.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col dark">
        {children}
      </body>
    </html>
  );
}
