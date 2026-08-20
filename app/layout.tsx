import type { Metadata } from "next";
import { Darumadrop_One } from "next/font/google";
import "./globals.css";

const darumadrop = Darumadrop_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-darumadrop",
});

export const metadata: Metadata = {
  title: "Jumpstart Haven - Hack Club",
  description: "Build a Godot platformer game! Learn the basics of game dev before running your Haven event.",
  icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={darumadrop.variable} style={{ backgroundColor: '#142B70' }}>
      <body style={{ backgroundColor: '#142B70', color: 'white' }}>
        {children}
      </body>
    </html>
  );
}
