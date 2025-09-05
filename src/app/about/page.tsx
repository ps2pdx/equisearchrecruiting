import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | EquiSearch Recruiting",
};

export default function AboutPage() {
  return (
    <section className="space-y-6 max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-semibold">About</h1>
      <p className="text-black/80">
        EquiSearch Recruiting is a values-driven recruiting partner focused on equity and
        opportunity. Founded with Native roots, our mission is to elevate Indigenous and POC
        talent by connecting exceptional people with companies committed to inclusive growth.
      </p>
      <p className="text-black/80">
        We bring structured, transparent, and human search practices that honor culture,
        community, and long-term fit. Our work spans leadership roles, inclusive hiring
        programs, and advisory for teams building responsibly.
      </p>
    </section>
  );
}

