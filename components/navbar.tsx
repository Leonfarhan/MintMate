"use client";

import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-xl mx-auto flex h-16 justify-between px-4 md:px-8">
        <div className="flex items-center space-x-3">
          <Link href="/" className="text-xl font-semibold">
            MintMate
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <ConnectWallet
            theme="dark"
            btnTitle="Connect Wallet"
            className="!bg-primary !text-primary-foreground hover:!bg-primary/90 !h-10 !rounded-full"
          />
        </div>
      </div>
    </header>
  );
}