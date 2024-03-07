import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/reusable/Navbar";
import Footer from "@/components/reusable/Footer";
import TopScroller from "@/components/reusable/TopScroller";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FindPro",
  description: "Finding professionals online",
};

export default function RootLayout({
  children,
  Component,
}: Readonly<{
  children: React.ReactNode;
  Component: any;
}>) {
  const showLayout = Component.layout !== false;
  return (
    <html lang="en">
      <body className={`${outfit.className} max-w-screen-xl mx-auto`}>
        {showLayout && <Navbar />}
        <Toaster />
        <TooltipProvider>
          <TopScroller />
          <main>{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
