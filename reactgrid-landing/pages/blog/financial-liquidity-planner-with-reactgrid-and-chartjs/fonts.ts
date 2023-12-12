import { DM_Sans, DM_Mono } from "next/font/google";

export const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const dm_mono = DM_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-mono",
});
