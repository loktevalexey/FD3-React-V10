import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "пример с fetch",
  description: "это пример с загрузкой данных",
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
