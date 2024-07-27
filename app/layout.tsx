import type { Metadata } from "next";
import { Inter,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"],variable:'--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ['400','700'] ,// 400 is the default weight, you can change it to 300, 500, etc.
  variable: "--font-ibm-plex-serif"
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform",
  icons:'/icons/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
