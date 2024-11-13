import { Hero } from "@/components/hero";
import { NFTGallery } from "@/components/nft-gallery";
import { MintNFTForm } from "@/components/mint-nft-form";

export default function Home() {
  return (
    <>
      <div className="flex container mx-auto px-4 py-16">
        <Hero />
        <MintNFTForm />
      </div>
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8">Recently Minted</h2>
          <NFTGallery />
        </div>
      </div>
    </>
  );
}