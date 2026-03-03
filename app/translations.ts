export const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
] as const;

export type LanguageCode = "en";

export const translations: Record<
  LanguageCode,
  {
    nav: { rules: string; mods: string; story: string; discord: string; donate: string };
    hero: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
      joinServer: string;
      discord: string;
    };
    features: {
      title: string;
      mods: { title: string; description: string };
      staff: { title: string; description: string };
      community: { title: string; description: string };
    };
    footer: { rights: string; story: string; rules: string; discord: string; donate: string };
  }
> = {
  en: {
    nav: { rules: "Rules", mods: "Mods", story: "Story", discord: "Discord", donate: "Donate" },
    hero: {
      badge: "DayZ Server",
      title: "Survive. Explore. ",
      titleHighlight: "Conquer.",
      subtitle:
        "Join a community of survivors. A unique DayZ server with carefully selected mods for an immersive experience.",
      joinServer: "DayZ Beans Launcher",
      discord: "Discord",
    },
    features: {
      title: "Why Breathless?",
      mods: {
        title: "Optimized mods",
        description:
          "A selection of mods to enhance your experience without compromising performance.",
      },
      staff: {
        title: "Active staff",
        description:
          "A dedicated team to maintain a fair and enjoyable gaming environment.",
      },
      community: {
        title: "Community",
        description:
          "Join a community of passionate players and experience unforgettable adventures.",
      },
    },
    footer: {
      rights: "All rights reserved.",
      story: "Story",
      rules: "Rules",
      discord: "Discord",
      donate: "Donate",
    },
  },
};
