import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "пример AppRouter",
  description: "это пример с AppRouter",
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
