"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThirdwebProvider 
          activeChain="sepolia"
          clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen bg-background pt-16">
              <Navbar />
              <main>{children}</main>
              <Toaster />
            </div>
          </ThemeProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}