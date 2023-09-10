import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "CatStore",
  description: "Be the part of a Cat life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
