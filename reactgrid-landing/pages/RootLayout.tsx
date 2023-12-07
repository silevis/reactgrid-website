import Header from "../components/header";
import { Footer } from "@/components/footer";
import { AppPropsWithLayout } from "./_app";

export default function RootLayout({
  pageProps,
  Component,
}: AppPropsWithLayout) {
  return (
    // <html lang="en" className={`${dm_mono.variable} ${dm_sans.variable}`}>
    //   <body>
    <Header>
      <Component {...pageProps} />

      <Runner
        code={function () {
          return <p>testest</p>;
        }}
        scope={{
          import: {
            ReactGrid: ReactGrid,
          },
        }}
      />
      <Footer />
    </Header>
    //   </body>
    // </html>
  );
}
