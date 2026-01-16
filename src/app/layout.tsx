import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Masud Nikson | Director, Editor & PhD Filmmaker",
  description: "Official portfolio of Masud Nikson. 15+ years of experience in filmmaking and strategic communication for global NGOs like BRAC, IFRC, and World Vision.",
  keywords: ["Masud Nikson", "Filmmaker", "Director", "Video Editor", "Bangladesh", "NGO Communication", "PhD Filmmaker"],
  verification: {
    google: "DLNd78EVOIj7sTBq1OHtWzXlqloH5lpYZF-yNgk_kHM",
  },
  openGraph: {
    title: "Masud Nikson | Director & Filmmaker",
    description: "Crafting visual stories for global impact.",
    url: "https://masudnikson.vercel.app",
    siteName: "Masud Nikson Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dadxh7vi7/image/upload/v1768494536/346057916_790335626046864_4573333725696286225_n_8a3e689d2f.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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