import { User } from "discord.js";

export type BotInfoType = {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  bot: boolean;
  banner?: string;
  accent_color?: string;
  global_name?: string;
  avatar_decoration_data?: string;
  banner_color?: string;
  mfa_enabled?: boolean;
  locale?: string;
  premium_type?: number;
  email?: string;
  verified?: boolean;
  bio: string;
};

export type PremiumUser = {
  id: string;
  isPremium: boolean;
  redeemedAt: number | null;
  expiresAt: number | null;
  plan: string | null;
};
