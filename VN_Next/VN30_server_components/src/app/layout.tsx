import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "пример server components",
  description: "это пример с серверными компонентами",
};

type RootLayoutProps = {
    children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {

  console.log("rendering RootLayout");

  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
