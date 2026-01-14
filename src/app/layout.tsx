import type { Metadata } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Industry Meets AI — Demo Day Series",
  description: "The fastest way for leaders to discover the AI tools reshaping their industry. 6 companies. 60 minutes. One evening.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://plausible.io/js/pa-6YPA29bYzWNxOGuXnFz5l.js"
          strategy="beforeInteractive"
        />
        <Script id="plausible-init" strategy="beforeInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </head>
      <body className={`${newsreader.variable} ${instrumentSans.variable} antialiased`}>
        {children}
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
