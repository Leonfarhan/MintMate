"use client";

import { useContract, useNFTs } from "@thirdweb-dev/react";
import { NFTCard } from "./nft-card";

const CONTRACT_ADDRESS = "0xA895a9b5882DBa287CF359b6a722C5be46aCb675";

export function NFTGallery() {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data: nfts, isLoading } = useNFTs(contract);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-square rounded-xl bg-muted"></div>
            <div className="mt-4 h-4 w-3/4 rounded bg-muted"></div>
            <div className="mt-2 h-4 w-1/2 rounded bg-muted"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!nfts?.length) {
    return (
      <div className="text-center">
        <p className="text-lg text-muted-foreground">No NFTs have been minted yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {nfts.map((nft) => (
        <NFTCard
          key={nft.metadata.id}
          name={nft.metadata.name || "Untitled"}
          image={nft.metadata.image || ""}
          creator={nft.owner.slice(0, 6)}
          creatorAddress={nft.owner}
        />
      ))}
    </div>
  );
}