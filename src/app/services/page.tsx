import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | EquiSearch Recruiting",
};

const services = [
  {
    title: "Executive & Leadership Search",
    color: "var(--accent-red)",
    points: [
      "Retained search for director+ roles",
      "Research-led sourcing across communities",
      "Structured, bias-aware evaluation rubric",
    ],
  },
  {
    title: "Inclusive Hiring Programs",
    color: "var(--accent-yellow)",
    points: [
      "Pipeline design and outreach playbooks",
      "Interview training and scorecards",
      "Offer process and candidate experience",
    ],
  },
  {
    title: "Advisory & Enablement",
    color: "var(--accent-green)",
    points: [
      "Org design and role scoping",
      "Compensation benchmarking",
      "Founders’ office hours",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl sm:text-3xl font-semibold">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-5 border border-black/10 rounded">
            <div className="h-1 w-8 mb-3" style={{ background: s.color }} />
            <h2 className="font-medium">{s.title}</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-black/80 space-y-1">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

