import type { Metadata, NextPage } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import Header from "../components/header";
import { Footer } from "@/components/footer";
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import "../app/globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const dm_mono = DM_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "ReactGrid Website",
  description: "Spreadsheet experience for your React app",
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function RootLayout({
  pageProps,
  Component,
}: AppPropsWithLayout) {
  return (
    // <html lang="en" className={`${dm_mono.variable} ${dm_sans.variable}`}>
    //   <body>
    <Header>
      <Component {...pageProps} />

      <Footer />
    </Header>
    //   </body>
    // </html>
  );
}
