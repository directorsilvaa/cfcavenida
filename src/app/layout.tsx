import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components/menu";
import { TopBar } from "@/components/topbar";
import { Footer } from "@/components/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auto Escola Avenida",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <TopBar />
        <div className="w-full bg-apresentation bg-cover h-screen">
          <Menu />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
