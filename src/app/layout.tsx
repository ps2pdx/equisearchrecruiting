import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EquiSearch Recruiting",
  description: "Advancing Indigenous and POC talent with equitable recruiting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-black`}>
        <Header />
        <main className="container-px mx-auto max-w-5xl py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
