import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Too Many Balloons - Décorations en ballons pour tous vos événements',
  description:
    "Too Many Balloons réalise des décorations en ballons uniques pour anniversaires, fêtes, événements d'entreprise et plus encore. Donnez une touche magique et festive à vos événements grâce à nos arches, colonnes et créations sur-mesure !",
  icons: {
    icon: {
      url: '/favicon3.ico',
      type: 'image/x-icon'
    }
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className="flex min-h-full flex-col"
      >
        <Nav />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
