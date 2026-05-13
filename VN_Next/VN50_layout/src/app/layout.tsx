import type { Metadata } from "next";

import {Slogan} from "@/src/components/Slogan";

export const metadata: Metadata = {
  title: "пример с layout",
  description: "это пример с использованием layout",
};

type RootLayoutProps = {
    children: React.ReactNode;
}

export default async function RootLayout({children}: RootLayoutProps) {

  return (
    <html>
      <body>
        {children}
        <Slogan/>
      </body>
    </html>
  );
}
