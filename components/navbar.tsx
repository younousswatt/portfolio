"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download, Menu, Moon, Monitor, Sun, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type Theme = "light" | "dark" | "system";

const themeOptions = [
  { label: "Light", value: "light", icon: Sun },
  { label: "Dark", value: "dark", icon: Moon },
  { label: "System", value: "system", icon: Monitor },
] as const;

function applyTheme(nextTheme: Theme) {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDark = media.matches;

  root.setAttribute("data-theme", nextTheme === "dark" || (nextTheme === "system" && prefersDark) ? "dark" : "light");
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme && ["light", "dark", "system"].includes(savedTheme) ? savedTheme : "system";
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onMediaChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);
    media.addEventListener?.("change", onMediaChange);

    return () => {
      media.removeEventListener?.("change", onMediaChange);
    };
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8 lg:px-12">
      <nav
        className={`mx-auto max-w-6xl border-b border-[var(--border)] bg-[rgba(245,245,247,0.8)] px-4 py-3 backdrop-blur-md transition-colors duration-200 ${
          scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.04)]" : ""
        }`}
        aria-label="Main navigation"
        style={{
          backgroundColor: "var(--background)",
          borderColor: "var(--border)",
          borderBottomWidth: "1px",
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3 text-sm font-medium tracking-[-0.02em] text-[var(--foreground)]">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[9px] uppercase tracking-[0.12em]">
              YW
            </span>
            Younouss Watt
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] p-1">
              {themeOptions.map(({ label, value, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  aria-label={`Set theme to ${label}`}
                  onClick={() => setTheme(value)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                    theme === value ? "bg-[var(--foreground)] text-[var(--background)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>

            <a
              href="/Younouss-Watt-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)]"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--foreground)] md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-3 border-t border-[var(--border)] pt-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-1 py-2 text-sm text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-3 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-3">
                <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] p-1">
                  {themeOptions.map(({ label, value, icon: Icon }) => (
                    <button
                      key={value}
                      type="button"
                      aria-label={`Set theme to ${label}`}
                      onClick={() => setTheme(value)}
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        theme === value ? "bg-[var(--foreground)] text-[var(--background)]" : "text-[var(--muted)]"
                      }`}
                    >
                      <Icon size={15} />
                    </button>
                  ))}
                </div>

                <a
                  href="/Younouss-Watt-CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm font-medium text-[var(--foreground)]"
                >
                  <Download size={14} />
                  Resume
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
