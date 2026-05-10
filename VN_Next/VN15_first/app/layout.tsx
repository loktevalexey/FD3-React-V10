import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "пример №1 на Next.js",
  description: "это первый пример на Next.js разработанный на нашем курсе",
};

type RootLayoutProps = {
    children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
