export const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
] as const;

export type LanguageCode = "en" | "pt" | "es" | "de" | "ja";

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
      joinServer: "Join with Dayz SA",
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
  pt: {
    nav: {
      rules: "Regras",
      story: "História",
      review: "Avaliações",
      discord: "Discord",
      donate: "Doar",
    },
    hero: {
      badge: "Servidor DayZ",
      title: "Sobreviva. Explore. ",
      titleHighlight: "Conquiste.",
      subtitle:
        "Junte‑se a uma comunidade de sobreviventes. Um servidor DayZ único com mods selecionados para uma experiência imersiva.",
      joinServer: "Entrar com Dayz SA",
      discord: "Entre no nosso Discord",
    },
    features: {
      title: "Por que Breathless?",
      mods: {
        title: "Mods otimizados",
        description:
          "Uma seleção de mods para melhorar a sua experiência sem comprometer o desempenho.",
      },
      staff: {
        title: "Staff ativa",
        description:
          "Uma equipa dedicada para manter um ambiente de jogo justo e divertido.",
      },
      community: {
        title: "Comunidade",
        description:
          "Junte‑se a uma comunidade de jogadores apaixonados e viva aventuras inesquecíveis.",
      },
    },
    footer: {
      rights: "Todos os direitos reservados.",
      story: "História",
      rules: "Regras",
      review: "Avaliações",
      discord: "Discord",
      donate: "Doar",
    },
    review: {
      title: "Avaliações do Servidor",
      subtitle:
        "Partilhe a sua experiência no Breathless. O seu feedback ajuda outros sobreviventes.",
      formName: "Nome ou nome no jogo",
      formRating: "Classificação",
      formComment: "A sua avaliação",
      submit: "Enviar avaliação",
      noReviews:
        "Ainda não há avaliações. Seja o primeiro a partilhar a sua experiência!",
      reviewsCount: "Avaliações",
      adminMode: "Admin",
      exitAdmin: "Sair do modo admin",
      deleteReview: "Apagar",
    },
  },
  es: {
    nav: {
      rules: "Normas",
      story: "Historia",
      review: "Reseñas",
      discord: "Discord",
      donate: "Donar",
    },
    hero: {
      badge: "Servidor de DayZ",
      title: "Sobrevive. Explora. ",
      titleHighlight: "Conquista.",
      subtitle:
        "Únete a una comunidad de supervivientes. Un servidor de DayZ único con mods seleccionados para una experiencia inmersiva.",
      joinServer: "Unirse con Dayz SA",
      discord: "Únete a nuestro Discord",
    },
    features: {
      title: "¿Por qué Breathless?",
      mods: {
        title: "Mods optimizados",
        description:
          "Una selección de mods para mejorar tu experiencia sin sacrificar el rendimiento.",
      },
      staff: {
        title: "Staff activa",
        description:
          "Un equipo dedicado para mantener un entorno de juego justo y divertido.",
      },
      community: {
        title: "Comunidad",
        description:
          "Únete a una comunidad de jugadores apasionados y vive aventuras inolvidables.",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
      story: "Historia",
      rules: "Normas",
      review: "Reseñas",
      discord: "Discord",
      donate: "Donar",
    },
    review: {
      title: "Reseñas del servidor",
      subtitle:
        "Comparte tu experiencia en Breathless. Tus comentarios ayudan a otros supervivientes.",
      formName: "Nombre o nombre en el juego",
      formRating: "Valoración",
      formComment: "Tu reseña",
      submit: "Enviar reseña",
      noReviews:
        "Todavía no hay reseñas. ¡Sé el primero en compartir tu experiencia!",
      reviewsCount: "Reseñas",
      adminMode: "Admin",
      exitAdmin: "Salir de admin",
      deleteReview: "Eliminar",
    },
  },
  de: {
    nav: {
      rules: "Regeln",
      story: "Story",
      review: "Bewertungen",
      discord: "Discord",
      donate: "Spenden",
    },
    hero: {
      badge: "DayZ‑Server",
      title: "Überlebe. Erkunde. ",
      titleHighlight: "Erobere.",
      subtitle:
        "Schließe dich einer Community von Überlebenden an. Ein einzigartiger DayZ‑Server mit sorgfältig ausgewählten Mods für ein intensives Erlebnis.",
      joinServer: "Mit Dayz SA beitreten",
      discord: "Tritt unserem Discord bei",
    },
    features: {
      title: "Warum Breathless?",
      mods: {
        title: "Optimierte Mods",
        description:
          "Eine Auswahl an Mods, die dein Erlebnis verbessern, ohne die Performance zu beeinträchtigen.",
      },
      staff: {
        title: "Aktives Team",
        description:
          "Ein engagiertes Team, das für eine faire und angenehme Spielumgebung sorgt.",
      },
      community: {
        title: "Community",
        description:
          "Tritt einer leidenschaftlichen Spielergemeinschaft bei und erlebe unvergessliche Abenteuer.",
      },
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      story: "Story",
      rules: "Regeln",
      review: "Bewertungen",
      discord: "Discord",
      donate: "Spenden",
    },
    review: {
      title: "Server‑Bewertungen",
      subtitle:
        "Teile deine Erfahrung mit Breathless. Dein Feedback hilft anderen Überlebenden.",
      formName: "Name oder In‑Game‑Name",
      formRating: "Bewertung",
      formComment: "Deine Bewertung",
      submit: "Bewertung absenden",
      noReviews:
        "Noch keine Bewertungen. Sei der Erste, der seine Erfahrung teilt!",
      reviewsCount: "Bewertungen",
      adminMode: "Admin",
      exitAdmin: "Adminmodus verlassen",
      deleteReview: "Löschen",
    },
  },
  ja: {
    nav: {
      rules: "ルール",
      story: "ストーリー",
      review: "レビュー",
      discord: "Discord",
      donate: "寄付",
    },
    hero: {
      badge: "DayZ サーバー",
      title: "生き残れ。探索せよ。 ",
      titleHighlight: "そして征服せよ。",
      subtitle:
        "生存者たちのコミュニティに参加しよう。厳選された MOD で没入感あふれる体験ができる特別な DayZ サーバーです。",
      joinServer: "Dayz SA で参加",
      discord: "Discord に参加する",
    },
    features: {
      title: "なぜ Breathless なのか？",
      mods: {
        title: "最適化された MOD",
        description:
          "パフォーマンスを損なわず、体験を向上させるために選び抜かれた MOD 構成です。",
      },
      staff: {
        title: "アクティブなスタッフ",
        description:
          "公平で楽しい環境を維持するための献身的なスタッフチーム。",
      },
      community: {
        title: "コミュニティ",
        description:
          "情熱的なプレイヤーたちと共に、忘れられない冒険を体験しましょう。",
      },
    },
    footer: {
      rights: "All rights reserved.",
      story: "ストーリー",
      rules: "ルール",
      review: "レビュー",
      discord: "Discord",
      donate: "寄付",
    },
    review: {
      title: "サーバーレビュー",
      subtitle:
        "Breathless での体験を共有してください。あなたのフィードバックは他の生存者の助けになります。",
      formName: "名前またはゲーム内の名前",
      formRating: "評価",
      formComment: "レビュー内容",
      submit: "レビューを送信",
      noReviews:
        "まだレビューはありません。最初の生存者として体験を共有しましょう！",
      reviewsCount: "レビュー",
      adminMode: "管理者",
      exitAdmin: "管理者モードを終了",
      deleteReview: "削除",
    },
  },
};
