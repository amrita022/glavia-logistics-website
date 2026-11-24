import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "../../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--geist",
});

export const metadata: Metadata = {
  title: "Glavia Logistics LLP | Freight Forwarding & Customs Clearance",
  description:
    "Mumbai-based freight forwarding, customs clearance and integrated logistics support for businesses in India and across international markets.",
  icons: { icon: "/glavia-mark.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{__html: `(()=>{let p;try{p=localStorage.getItem('glavia-theme')}catch{}document.documentElement.classList.toggle('dark',p?p==='dark':matchMedia('(prefers-color-scheme: dark)').matches)})()`}} /></head>
      <body>{children}</body>
    </html>
  );
}
