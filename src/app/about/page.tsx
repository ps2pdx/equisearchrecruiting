import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | EquiSearch Recruiting",
};

export default function AboutPage() {
  return (
    <section className="space-y-6 max-w-3xl">
      <div>
        <Image
          src="/images/office.jpg"
          alt="Office environment"
          width={1200}
          height={500}
          priority
          className="w-full h-auto rounded border border-black/10 object-cover"
        />
      </div>
      <h1 className="text-2xl sm:text-3xl font-semibold">About</h1>
      <Image
        src="/images/headshot.jpeg"
        alt="Founder headshot"
        width={200}
        height={200}
        className="rounded-full border border-black/10 object-cover"
      />
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
