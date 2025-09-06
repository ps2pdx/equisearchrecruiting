import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
        <div className="space-y-5 flex-1">
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            Equitable recruiting for the next generation of leaders
          </h1>
          <p className="max-w-2xl text-black/70">
            {site.tagline} We partner with companies to build diverse, high-impact teams
            while opening doors for Indigenous communities and people of color.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors"
            >
              Get in touch
            </Link>
            <Link href="/services" className="px-4 py-2 underline">
              Our services
            </Link>
          </div>
        </div>
        <Image
          src="/images/headshot.jpg"
          alt="Founder headshot"
          width={200}
          height={200}
          priority
          className="rounded-full border border-black/10 object-cover"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-4 border border-black/10 rounded">
          <div className="h-1 w-8 mb-3" style={{ background: "var(--accent-red)" }} />
          <h3 className="font-medium">Executive & Leadership Search</h3>
          <p className="text-sm text-black/70 mt-2">
            Targeted search for leaders who reflect your customers and communities.
          </p>
        </div>
        <div className="p-4 border border-black/10 rounded">
          <div className="h-1 w-8 mb-3" style={{ background: "var(--accent-yellow)" }} />
          <h3 className="font-medium">Inclusive Hiring Programs</h3>
          <p className="text-sm text-black/70 mt-2">
            Build equitable pipelines and structured processes that reduce bias.
          </p>
        </div>
        <div className="p-4 border border-black/10 rounded">
          <div className="h-1 w-8 mb-3" style={{ background: "var(--accent-green)" }} />
          <h3 className="font-medium">Advisory & Enablement</h3>
          <p className="text-sm text-black/70 mt-2">
            On-call guidance for founders and teams scaling responsibly.
          </p>
        </div>
      </div>
    </section>
  );
}
