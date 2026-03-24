"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSelector } from "../components/LanguageSelector";
import { RulesDropdown } from "../components/RulesDropdown";
import { AuthButton } from "../components/AuthButton";

const storyContent = `🩸🌑 The Story of Breathless 🌑🩸

🌍 In the remote land of Chernarus, the unthinkable happened.

For years, families lived in peace… but that peace was only the silence before the storm.

🏝️ On the dark island of Skalistyi, the government began forbidden experiments: the Breathless Virus.
💉 Designed to forge the perfect soldier – immortal, unstoppable – but instead of heroes, horrors were born.
☠️ Prisoners turned into abominations hungry for flesh.

🚨 A single breach unleashed thousands, and in seconds the apocalypse consumed the land.
🏚️ Cities fell, military bases collapsed, and Chernarus became a living graveyard, ruled by the dead.

⚗️ In Tisy, the government built a new laboratory in desperation.
⏳ For three years they sought a cure.
⚠️ Their only result: an imperfect vaccine, making humans invisible to animals and the undead… but powerless against a single bite.

😈 And when all seemed lost… they came.

🕶️ From the shadows rose a faction forged in pain and hatred.
✋ They called themselves The Black Hand.

💥 They struck Tisy with ruthless violence.
🔥 Explosions tore through the facility, fire consumed secrets, and blood stained every wall.
👻 Some swear that even today, footsteps and screams echo — ghosts of a nightmare that never ended.

The Black Hand did not stop.
✈️ They fortified themselves at Krasnostav Airfield, where they built the Breathless Lab.
⚔️ There they gathered weapons, resources, and stolen knowledge.
🩸 They became more than survivors: they became the plague within the plague.

❓ Today, no one knows if they are alive… or only shadows haunting the ruins.
⚠️ But one truth remains: where The Black Hand walks, hope dies.

🫵 Now, survivor, it is your turn to explore this cursed land.
🌲 Face the haunted forests of Green Mountain.
⚓ Uncover secrets hidden in Pavlovo's ports.
🏙️ Dare to enter the ruins of destroyed Chernogorsk.
🧟 Prepare to face the dead… and the living.

👑 Will you be just another forgotten corpse…
…or will you rise as the next Legendary Breathless?

💀 Chernarus needs you.
But remember: death breathes at your side, and The Black Hand watches from the shadows.`;

export default function StoryPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/image.png)" }}
      />
      <div className="fixed inset-0 -z-10 bg-zinc-950/80" />

      {/* Nav */}
      <nav className="relative z-10 flex flex-wrap items-center justify-center gap-4 px-4 py-4 sm:px-6 md:px-12 md:py-6 md:justify-between">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/KongIcon.png"
            alt="Breathless"
            width={280}
            height={80}
            className="h-10 w-auto sm:h-12 md:h-16"
          />
        </Link>
        <div className="-mt-1 flex flex-wrap items-center justify-center gap-3 text-sm sm:gap-4 md:ml-auto md:justify-end">
          <RulesDropdown />
          <Link
            href="/story"
            className="text-sm font-medium text-amber-500"
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
      <div className="relative z-10 -mt-1 flex justify-center px-4 sm:px-6 md:justify-end md:px-12">
        <Link
          href="https://discord.gg/2nQcNzc7qf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open VYKIX Discord in a new tab"
          className="rounded transition-opacity hover:opacity-80"
        >
          <Image src="/v.ico" alt="VYKIX Discord" width={28} height={28} className="h-7 w-7" />
        </Link>
      </div>

      {/* External partner links removed */}

      {/* Story Tab Content */}
      <main className="relative z-10 px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-amber-500/30 bg-zinc-950/90 p-6 shadow-2xl backdrop-blur-sm md:p-10">
            <h1 className="mb-8 text-center text-2xl font-bold text-amber-500 md:text-3xl">
              🩸 The Story of Breathless 🌑
            </h1>
            <div className="space-y-6 text-base leading-relaxed text-zinc-300 md:text-lg">
              {storyContent.split("\n\n").map((paragraph, i) => (
                <p key={i} className="whitespace-pre-line text-zinc-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/80 bg-zinc-950/60 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
          <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2">
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
              />
            </Link>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <span className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Breathless. {t.footer.rights}
            </span>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-zinc-500 hover:text-amber-500"
              >
                Home
              </Link>
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
                href="https://discord.gg/E9HXhsQssW"
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
