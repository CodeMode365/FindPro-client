import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "react-hot-toast";
import AuthWrapper from "@/components/wrappers/AuthWrapper";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FindPro",
  description: "Finding professionals online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} max-w-screen-xl mx-auto`}>
        <AuthWrapper>
          <Toaster />
          <TooltipProvider>{children}</TooltipProvider>
        </AuthWrapper>
      </body>
    </html>
  );
}
