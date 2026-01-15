import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masud Nikson — Director • Editor • Filmmaker",
  description: "Crafting visual narratives through cinema, documentary, and artistic communication.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
