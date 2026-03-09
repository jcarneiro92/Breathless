import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const reviewOwnerIds =
  (process.env.DISCORD_SERVER_OWNER_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "identify guilds.members.read",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ account }) {
      const accessToken = account?.access_token;
      const guildId = process.env.DISCORD_GUILD_ID;

      if (!accessToken || !guildId) {
        return false;
      }

      try {
        const res = await fetch(
          `https://discord.com/api/users/@me/guilds/${guildId}/member`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Only allow sign in if the user is a member of the guild
        return res.ok;
      } catch {
        return false;
      }
    },
    async jwt({ token, account, profile }) {
      const guildId = process.env.DISCORD_GUILD_ID;

      if (account?.access_token && profile && guildId) {
        token.discordId = (profile as any).id;
        token.avatar = (profile as any).avatar;

        try {
          const res = await fetch(
            `https://discord.com/api/users/@me/guilds/${guildId}/member`,
            {
              headers: {
                Authorization: `Bearer ${account.access_token}`,
              },
            }
          );

          if (res.ok) {
            const member = await res.json();
            const nick =
              member.nick ||
              member.user?.global_name ||
              member.user?.username ||
              (profile as any).username;

            token.username = nick;
            (token as any).isInGuild = true;
          } else {
            (token as any).isInGuild = false;
          }
        } catch {
          (token as any).isInGuild = false;
        }
      }

      // Always recompute owner flag from the stored Discord ID
      if (token.discordId) {
        (token as any).isReviewOwner = reviewOwnerIds.includes(
          String(token.discordId)
        );
      }

      return token;
    },
    async session({ session, token }) {
      if (token.discordId) {
        (session as any).discordId = token.discordId;
        if (session.user) {
          session.user.name = (token as any).username ?? session.user.name;
          (session.user as any).image =
            (token as any).avatar ?? session.user.image;
        }
        (session as any).isInGuild = (token as any).isInGuild ?? false;
        (session as any).isReviewOwner =
          (token as any).isReviewOwner ?? false;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

