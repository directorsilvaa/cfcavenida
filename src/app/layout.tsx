import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components/menu";
import { TopBar } from "@/components/topbar";
import { Footer } from "@/components/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novo - Auto Escola Avenida",
  description: "Com 14 anos de experiência, somos líderes em treinamento de direção. Nossos instrutores experientes e programas personalizados garantem que você se torne um motorista confiante. Não espere mais, junte-se a nós hoje para iniciar sua jornada na estrada com sucesso!",
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
