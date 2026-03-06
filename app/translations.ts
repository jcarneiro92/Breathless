export const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
] as const;

export type LanguageCode = "en";

export const translations: Record<
  LanguageCode,
  {
    nav: { rules: string; story: string; review: string; discord: string; donate: string };
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
    footer: { rights: string; story: string; rules: string; review: string; discord: string; donate: string };
    review: {
      title: string;
      subtitle: string;
      formName: string;
      formRating: string;
      formComment: string;
      submit: string;
      noReviews: string;
      reviewsCount: string;
      adminMode: string;
      exitAdmin: string;
      deleteReview: string;
    };
  }
> = {
  en: {
    nav: { rules: "Rules", story: "Story", review: "Reviews", discord: "Discord", donate: "Donate" },
    hero: {
      badge: "DayZ Server",
      title: "Survive. Explore. ",
      titleHighlight: "Conquer.",
      subtitle:
        "Join a community of survivors. A unique DayZ server with carefully selected mods for an immersive experience.",
      joinServer: "Join with DayZ Beans Launcher",
      discord: "Join us on Discord",
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
      review: "Reviews",
      discord: "Discord",
      donate: "Donate",
    },
    review: {
      title: "Server Reviews",
      subtitle: "Share your experience on Breathless. Your feedback helps other survivors.",
      formName: "Name or in-game name",
      formRating: "Rating",
      formComment: "Your review",
      submit: "Submit review",
      noReviews: "No reviews yet. Be the first to share your experience!",
      reviewsCount: "Reviews",
      adminMode: "Admin",
      exitAdmin: "Exit admin",
      deleteReview: "Delete",
    },
  },
};
