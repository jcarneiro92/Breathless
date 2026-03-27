"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";
import { LanguageSelector } from "./components/LanguageSelector";
import { RulesDropdown } from "./components/RulesDropdown";
import { AuthButton } from "./components/AuthButton";

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
        <nav className="relative z-10 flex flex-wrap items-center justify-center gap-4 px-4 py-4 sm:px-6 md:px-12 md:py-6 md:justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/KongIcon.png"
                alt="Breathless"
                width={280}
                height={80}
                className="h-20 w-auto sm:h-24 md:h-28"
                priority
              unoptimized
              />
            </Link>
            {/* <Link
              href="https://discord.gg/2nQcNzc7qf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open VYKIX Discord in a new tab"
              className="rounded transition-opacity hover:opacity-80"
            >
              <Image
                src="/v.ico"
                alt="VYKIX Discord"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </Link> */}
          </div>
          <div className="-mt-1 flex flex-wrap items-center justify-center gap-3 text-sm sm:gap-4 md:ml-auto md:justify-end">
            <RulesDropdown />
            <Link
              href="/story"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500"
            >
              {t.nav.story}
            </Link>
            <Link
              href="/review"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500"
            >
              {t.nav.review}
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
              href="https://breathless.tip4serv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500"
            >
              {t.nav.donate}
            </Link>
            <LanguageSelector />
            <AuthButton />
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
          <div className="flex flex-col gap-4 sm:flex-row mt-4">
          
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

      {/* Partner section removed */}

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
          {/* <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2">
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Partner
            </span>
            <Link
              href="https://www.vykix.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Vykix website in a new tab"
            >
              <Image
                src="/vykix.gif"
                alt="Vykix"
                width={120}
                height={40}
                className="h-8 w-auto rounded"
                unoptimized
              />
            </Link>
          </div> */}
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
                href="/review"
                className="text-sm text-zinc-500 hover:text-amber-500"
              >
                {t.footer.review}
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
                href="https://breathless.tip4serv.com/"
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
