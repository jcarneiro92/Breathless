export const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

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
      joinServer: "Join the server",
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
  fr: {
    nav: { rules: "Règles", mods: "Mods", story: "Histoire", discord: "Discord", donate: "Faire un don" },
    hero: {
      badge: "Serveur DayZ",
      title: "Survivez. Explorez. ",
      titleHighlight: "Conquérez.",
      subtitle:
        "Rejoignez une communauté de survivants. Un serveur DayZ unique avec des mods soigneusement sélectionnés pour une expérience immersive.",
      joinServer: "Rejoindre le serveur",
      discord: "Discord",
    },
    features: {
      title: "Pourquoi Breathless ?",
      mods: {
        title: "Mods optimisés",
        description:
          "Une sélection de mods pour enrichir votre expérience sans compromettre les performances.",
      },
      staff: {
        title: "Staff actif",
        description:
          "Une équipe dévouée pour maintenir un environnement de jeu équitable et agréable.",
      },
      community: {
        title: "Communauté",
        description:
          "Rejoignez une communauté de joueurs passionnés et vivez des aventures inoubliables.",
      },
    },
    footer: {
      rights: "Tous droits réservés.",
      story: "Histoire",
      rules: "Règles",
      discord: "Discord",
      donate: "Faire un don",
    },
  },
  es: {
    nav: { rules: "Reglas", mods: "Mods", story: "Historia", discord: "Discord", donate: "Donar" },
    hero: {
      badge: "Servidor DayZ",
      title: "Sobrevive. Explora. ",
      titleHighlight: "Conquista.",
      subtitle:
        "Únete a una comunidad de supervivientes. Un servidor DayZ único con mods cuidadosamente seleccionados para una experiencia inmersiva.",
      joinServer: "Unirse al servidor",
      discord: "Discord",
    },
    features: {
      title: "¿Por qué Breathless?",
      mods: {
        title: "Mods optimizados",
        description:
          "Una selección de mods para mejorar tu experiencia sin comprometer el rendimiento.",
      },
      staff: {
        title: "Staff activo",
        description:
          "Un equipo dedicado para mantener un entorno de juego justo y agradable.",
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
      rules: "Reglas",
      discord: "Discord",
      donate: "Donar",
    },
  },
  de: {
    nav: { rules: "Regeln", mods: "Mods", story: "Geschichte", discord: "Discord", donate: "Spenden" },
    hero: {
      badge: "DayZ Server",
      title: "Überlebe. Erkunde. ",
      titleHighlight: "Erobere.",
      subtitle:
        "Tritt einer Gemeinschaft von Überlebenden bei. Ein einzigartiger DayZ-Server mit sorgfältig ausgewählten Mods für ein immersives Erlebnis.",
      joinServer: "Server beitreten",
      discord: "Discord",
    },
    features: {
      title: "Warum Breathless?",
      mods: {
        title: "Optimierte Mods",
        description:
          "Eine Auswahl von Mods zur Verbesserung deiner Erfahrung ohne Leistungseinbußen.",
      },
      staff: {
        title: "Aktives Team",
        description:
          "Ein engagiertes Team für ein faires und angenehmes Spielumfeld.",
      },
      community: {
        title: "Community",
        description:
          "Tritt einer Gemeinschaft leidenschaftlicher Spieler bei und erlebe unvergessliche Abenteuer.",
      },
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      story: "Geschichte",
      rules: "Regeln",
      discord: "Discord",
      donate: "Spenden",
    },
  },
  pt: {
    nav: { rules: "Regras", mods: "Mods", story: "História", discord: "Discord", donate: "Doar" },
    hero: {
      badge: "Servidor DayZ",
      title: "Sobreviva. Explore. ",
      titleHighlight: "Conquiste.",
      subtitle:
        "Junte-se a uma comunidade de sobreviventes. Um servidor DayZ único com mods cuidadosamente selecionados para uma experiência imersiva.",
      joinServer: "Entrar no servidor",
      discord: "Discord",
    },
    features: {
      title: "Por que Breathless?",
      mods: {
        title: "Mods otimizados",
        description:
          "Uma seleção de mods para melhorar sua experiência sem comprometer o desempenho.",
      },
      staff: {
        title: "Equipe ativa",
        description:
          "Uma equipe dedicada para manter um ambiente de jogo justo e agradável.",
      },
      community: {
        title: "Comunidade",
        description:
          "Junte-se a uma comunidade de jogadores apaixonados e viva aventuras inesquecíveis.",
      },
    },
    footer: {
      rights: "Todos os direitos reservados.",
      story: "História",
      rules: "Regras",
      discord: "Discord",
      donate: "Doar",
    },
  },
  ru: {
    nav: { rules: "Правила", mods: "Моды", story: "История", discord: "Discord", donate: "Пожертвовать" },
    hero: {
      badge: "Сервер DayZ",
      title: "Выживайте. Исследуйте. ",
      titleHighlight: "Побеждайте.",
      subtitle:
        "Присоединяйтесь к сообществу выживших. Уникальный сервер DayZ с тщательно подобранными модами для полного погружения.",
      joinServer: "Присоединиться к серверу",
      discord: "Discord",
    },
    features: {
      title: "Почему Breathless?",
      mods: {
        title: "Оптимизированные моды",
        description:
          "Подборка модов для улучшения вашего опыта без ущерба производительности.",
      },
      staff: {
        title: "Активная команда",
        description:
          "Преданная команда для поддержания честной и приятной игровой среды.",
      },
      community: {
        title: "Сообщество",
        description:
          "Присоединяйтесь к сообществу увлечённых игроков и переживайте незабываемые приключения.",
      },
    },
    footer: {
      rights: "Все права защищены.",
      story: "История",
      rules: "Правила",
      discord: "Discord",
      donate: "Пожертвовать",
    },
  },
  zh: {
    nav: { rules: "规则", mods: "模组", story: "故事", discord: "Discord", donate: "捐赠" },
    hero: {
      badge: "DayZ 服务器",
      title: "生存。探索。",
      titleHighlight: "征服。",
      subtitle:
        "加入幸存者社区。独特的 DayZ 服务器，精心挑选模组，带来沉浸式体验。",
      joinServer: "加入服务器",
      discord: "Discord",
    },
    features: {
      title: "为什么选择 Breathless？",
      mods: {
        title: "优化模组",
        description: "精选模组，提升游戏体验，不影响性能。",
      },
      staff: {
        title: "活跃管理",
        description: "专业团队维护公平愉快的游戏环境。",
      },
      community: {
        title: "社区",
        description: "加入热情玩家社区，体验难忘冒险。",
      },
    },
    footer: {
      rights: "版权所有。",
      story: "故事",
      rules: "规则",
      discord: "Discord",
      donate: "捐赠",
    },
  },
  ja: {
    nav: { rules: "ルール", mods: "MOD", story: "ストーリー", discord: "Discord", donate: "寄付" },
    hero: {
      badge: "DayZサーバー",
      title: "生き延びろ。探検せよ。",
      titleHighlight: "征服せよ。",
      subtitle:
        "生存者のコミュニティに参加しよう。没入感のある体験のため、厳選されたMODを搭載したユニークなDayZサーバー。",
      joinServer: "サーバーに参加",
      discord: "Discord",
    },
    features: {
      title: "なぜBreathless？",
      mods: {
        title: "最適化されたMOD",
        description:
          "パフォーマンスを損なうことなく体験を向上させる厳選MOD。",
      },
      staff: {
        title: "アクティブなスタッフ",
        description:
          "公平で楽しいゲーム環境を維持する献身的なチーム。",
      },
      community: {
        title: "コミュニティ",
        description:
          "情熱的なプレイヤーのコミュニティに参加し、忘れられない冒険を体験しよう。",
      },
    },
    footer: {
      rights: "All rights reserved.",
      story: "ストーリー",
      rules: "ルール",
      discord: "Discord",
      donate: "寄付",
    },
  },
};
