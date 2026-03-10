import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const billiardFont = localFont({
  src: [
    {
      path: "../public/fonts/Rene Bieder  Milliard Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Rene Bieder  Milliard Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Rene Bieder  Milliard Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Rene Bieder  Milliard Black.otf",
      weight: "900",
      style: "normal",
    }
  ],
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
      <body className={`${billiardFont.variable} font-sans antialiased text-[#333333] bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}
