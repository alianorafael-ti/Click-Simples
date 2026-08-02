import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Click Simples",
    template: "%s | Click Simples",
  },

  description:
    "Aprenda marketing digital, presença digital, sites, Google e tecnologia de forma simples, prática e sem linguagem técnica.",

  keywords: [
    "marketing digital",
    "presença digital",
    "site",
    "Google",
    "Google Meu Negócio",
    "WhatsApp",
    "Instagram",
    "pequenos empreendedores",
    "microempreendedor",
    "tecnologia",
    "Click Simples",
  ],

  authors: [
    {
      name: "Aliano Rafael",
    },
  ],

  creator: "Aliano Rafael",

  openGraph: {
    title: "Click Simples",
    description:
      "Marketing digital explicado de forma simples para pequenos empreendedores.",
    siteName: "Click Simples",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}