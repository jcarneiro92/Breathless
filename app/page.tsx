"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";
import { LanguageSelector } from "./components/LanguageSelector";
import { RulesDropdown } from "./components/RulesDropdown";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/image.png)" }}
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 -z-10 bg-zinc-950/70" />

      {/* Hero Section */}
      <header className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4040400a_1px,transparent_1px),linear-gradient(to_bottom,#4040400a_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
        <nav className="relative z-10 flex items-center justify-between gap-4 px-6 py-6 md:px-12">
          <Link href="/" className="flex items-center">
            <Image
              src="/KongIcon.png"
              alt="Breathless"
              width={280}
              height={80}
              className="h-28 w-auto md:h-32"
              priority
            />
          </Link>
          <div className="-mt-2 flex items-center gap-4">
            <RulesDropdown />
            <Link
              href="/story"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500"
            >
              {t.nav.story}
            </Link>
            <Link
              href="https://discord.gg/E9HXhsQssW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500"
            >
              {t.nav.discord}
            </Link>
            <Link
              href="https://ko-fi.com/breathlesspve"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500"
            >
              {t.nav.donate}
            </Link>
            <LanguageSelector />
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 md:py-32">
          <div className="mb-4 inline-block rounded border border-amber-500/50 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-500">
            {t.hero.badge}
          </div>
          <h1 className="mb-6 max-w-4xl text-center text-5xl font-bold tracking-tight text-white md:text-7xl">
            {t.hero.title}
            <span className="text-amber-500">{t.hero.titleHighlight}</span>
          </h1>
          <p className="mb-12 max-w-2xl text-center text-lg text-zinc-400">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#"
              className="rounded-lg bg-amber-500 px-8 py-4 font-semibold text-zinc-950 transition-all hover:bg-amber-400"
            >
              {t.hero.joinServer}
            </Link>
            <Link
              href="https://discord.gg/E9HXhsQssW"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-600 px-8 py-4 font-semibold text-white transition-all hover:border-amber-500 hover:bg-amber-500/10"
            >
              {t.hero.discord}
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="border-t border-zinc-800/80 bg-zinc-950/50 backdrop-blur-sm px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            {t.features.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="mb-4 text-2xl">🎮</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {t.features.mods.title}
              </h3>
              <p className="text-zinc-400">{t.features.mods.description}</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="mb-4 text-2xl">🛡️</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {t.features.staff.title}
              </h3>
              <p className="text-zinc-400">{t.features.staff.description}</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="mb-4 text-2xl">👥</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {t.features.community.title}
              </h3>
              <p className="text-zinc-400">{t.features.community.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950/60 backdrop-blur-sm px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
          {/* VYKIX Banner */}
          <Link
            href="https://www.vykix.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-md transition-opacity hover:opacity-90"
          >
            <Image
              src="/vykix.gif"
              alt="VYKIX - DayZ Game Server Hosting"
              width={468}
              height={60}
              className="h-auto w-full rounded-lg object-contain"
              unoptimized
            />
          </Link>
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <span className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Breathless. {t.footer.rights}
            </span>
            <div className="flex gap-6">
              <Link
                href="/story"
                className="text-sm text-zinc-500 hover:text-amber-500"
              >
                {t.footer.story}
              </Link>
              <Link
                href="https://discord.com/channels/1375764048045408327/1475160342056403218"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-amber-500"
              >
                {t.footer.rules}
              </Link>
              <Link
                href="https://discord.com/channels/1375764048045408327/1475149119772168335"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-amber-500"
              >
                {t.footer.discord}
              </Link>
              <Link
                href="https://ko-fi.com/breathlesspve"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-amber-500"
              >
                {t.footer.donate}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
