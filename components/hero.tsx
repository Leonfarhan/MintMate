"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MintNFTForm } from "./mint-nft-form";
import { useState } from "react";


export function Hero() {
  const [showMintForm, setShowMintForm] = useState(false);

  return (
    <section className="mx-auto max-w-3xl text-center">
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
      <div className="mt-10 flex items-center justify-center gap-4">
        {!showMintForm && (
          <>
            <Button size="lg" className="h-12 px-8 rounded-full" onClick={() => setShowMintForm(true)}>
              Start Creating
            </Button>
            <Link href="#gallery" legacyBehavior>
              <a>
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-full">
                  View Gallery
                </Button>
              </a>
            </Link>
          </>
        )}
      </div>
      {showMintForm && (
        <div className="mt-10">
          <MintNFTForm />
          <Button size="lg" className="h-12 px-8 rounded-full" onClick={() => setShowMintForm(false)}>
            Mint NFT
          </Button>
        </div>
      )}
    </section>
  );
}