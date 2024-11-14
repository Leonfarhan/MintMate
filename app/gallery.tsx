import { NFTGallery } from "@/components/nft-gallery";

export default function Gallery() {
  return (
    <div className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Recently Minted</h2>
        <NFTGallery />
      </div>
    </div>
  );
}