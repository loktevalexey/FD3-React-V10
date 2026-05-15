import type { Metadata } from "next";

import {CompanyContextProvider} from "@/src/contexts/CompanyContext";

export const metadata: Metadata = {
  title: "пример с контекстом и api",
  description: "это пример с Context и Next.js-бэкендом",
};

type RootLayoutProps = {
    children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {

  console.log("rendering RootLayout");

  return (
    <html>
      <body>
        <CompanyContextProvider>
          {children}
        </CompanyContextProvider>
      </body>
    </html>
  );
}
