"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-black/10">
      <div className="container-px mx-auto">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-semibold tracking-tight">
            {site.name}
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            {site.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "hover:underline" + (active ? " underline" : " text-black/80")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="accent-bar" aria-hidden>
        <span />
        <span />
        <span />
      </div>
    </header>
  );
}

