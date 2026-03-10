import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const baseFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Inntag Solar | Economia e Energia Limpa",
  description: "Reduza sua conta de energia com um projeto solar residencial sob medida. Simulação personalizada de energia solar Inntag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${baseFont.variable} font-sans antialiased text-[#333333] bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}
