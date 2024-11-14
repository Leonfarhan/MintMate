"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MintNFTForm } from "./mint-nft-form";
import { useState } from "react";
import { X } from "lucide-react";

export function Hero() {
  const [showMintForm, setShowMintForm] = useState(false);

  return (
    <section className="mx-auto max-w-6xl text-left relative">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className={`w-full md:w-1/2 transition-all duration-500 ease-in-out ${
          showMintForm ? 'md:scale-95 md:opacity-50' : 'md:scale-100 md:opacity-100'
        }`}>
          <div className="container mx-auto px-4 py-16 md:p-0">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Create{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Digital Art
              </span>{" "}
              NFTs
            </h1>
            <p className="mt-8 text-xl leading-8 text-muted-foreground">
              Transform your digital creations into NFTs on the Ethereum Sepolia
              testnet. Simple, secure, and seamless.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button onClick={() => setShowMintForm(true)} size="lg" className="rounded-full">
                Start Creating
              </Button>
              <Link href="/gallery">
                <Button variant="outline" size="lg" className="rounded-full">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div 
          className={`absolute md:relative top-0 right-0 w-full md:w-1/2 h-full transition-transform duration-500 ease-in-out bg-background`}
          style={{
            transform: showMintForm ? 'translateX(0)' : 'translateX(100%)',
            opacity: showMintForm ? 1 : 0,
            pointerEvents: showMintForm ? 'auto' : 'none'
          }}
        >
          <MintNFTForm />
          <Button 
            size="lg" 
            variant="ghost"
            className="absolute -top-8 right-6"
            onClick={() => setShowMintForm(false)}
          >
            <X />
          </Button>
        </div>
      </div>
    </section>
  );
}