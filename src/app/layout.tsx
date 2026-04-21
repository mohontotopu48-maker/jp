import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JP Plastering | Premium Plastering Services in Orange County",
  description:
    "Expert plastering, skimming, and wall finishing services for homes and businesses. Flawless walls, professional finish, guaranteed quality. Get your free quote today!",
  keywords: [
    "plastering services",
    "interior plastering",
    "exterior plastering",
    "skimming",
    "wall finishing",
    "ceiling plastering",
    "crack repair",
    "plasterer",
    "Orange County plastering",
    "JP Plastering",
    "professional plastering",
    "smooth walls",
    "wall restoration",
  ],
  authors: [{ name: "JP Plastering" }],
  openGraph: {
    title: "JP Plastering | Premium Plastering Services",
    description:
      "Transform your walls with professional craftsmanship. Expert plastering, skimming, and wall finishing services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${openSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
