import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auvex — Digital systems for ambitious businesses",
  description: "Auvex builds premium catalogues, websites, automation and AI systems for businesses that want to sell, respond and operate better.",
  metadataBase: new URL("https://auvex.vercel.app"),
  openGraph: { title: "Auvex", description: "Digital systems for ambitious businesses.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
