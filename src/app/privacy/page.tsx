import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | EquiSearch Recruiting",
};

export default function PrivacyPage() {
  return (
    <section className="space-y-4 max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-semibold">Privacy</h1>
      <p className="text-black/80">
        We only collect information you choose to share with us for the purpose of providing
        recruiting services and communication. We do not sell your data.
      </p>
      <p className="text-black/80">
        For any questions or data requests, contact us at the email listed on our Contact page.
      </p>
    </section>
  );
}

