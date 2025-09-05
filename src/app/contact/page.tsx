import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | EquiSearch Recruiting",
};

export default function ContactPage() {
  return (
    <section className="space-y-6 max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-semibold">Contact</h1>
      <p className="text-black/80">
        We’d love to learn about your hiring goals or how we can support your search.
      </p>
      <div className="p-5 border border-black/10 rounded">
        <p>
          Email: {" "}
          <a className="underline" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>
        </p>
        <p className="mt-2 text-sm text-black/70">
          Prefer a quick intro? {" "}
          <Link href="/services" className="underline">Explore services</Link> or share a brief note and we’ll reply within 1 business day.
        </p>
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm" htmlFor="name">Name</label>
          <input id="name" name="name" className="mt-1 w-full border border-black/15 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="mt-1 w-full border border-black/15 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} className="mt-1 w-full border border-black/15 rounded px-3 py-2" />
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors">Send</button>
          <a className="px-4 py-2 underline" href={`mailto:${site.contactEmail}`}>Open email</a>
        </div>
      </form>
    </section>
  );
}

