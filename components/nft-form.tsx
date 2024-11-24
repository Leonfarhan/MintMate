"use client";

import { useState } from "react";
import { useContract, useContractWrite, useAddress, useStorageUpload } from "@thirdweb-dev/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CONTRACT_ADDRESS = "0xA895a9b5882DBa287CF359b6a722C5be46aCb675";

export function NFTForm() {
  const address = useAddress();
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const { contract } = useContract(CONTRACT_ADDRESS);
  const { mutateAsync: mintNFT, isLoading: isMinting } = useContractWrite(contract, "mintNFT");
  const { mutateAsync: upload } = useStorageUpload();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !name || !address) return;

    try {
      setIsUploading(true);
      // Upload image to IPFS
      const imageUri = await upload({ data: [file] });
      
      // Create and upload metadata
      const metadata = {
        name: name,
        description: `A unique NFT created on MintMate by ${address}`,
        image: imageUri[0],
      };
      const metadataUri = await upload({ data: [metadata] });

      // Mint NFT
      await mintNFT({ args: [address, metadataUri[0]] });

      toast({
        title: "Success!",
        description: "Your NFT has been minted successfully.",
      });

      // Reset form
      setName("");
      setFile(null);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong while minting your NFT.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">NFT Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter NFT name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          required
        />
      </div>

      <Button 
        type="submit" 
        disabled={!address || isUploading || isMinting}
        className="w-full"
      >
        {(isUploading || isMinting) && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {isUploading ? "Uploading..." : isMinting ? "Minting..." : "Mint NFT"}
      </Button>

      {!address && (
        <p className="text-sm text-muted-foreground text-center">
          Please connect your wallet to mint NFTs
        </p>
      )}
    </form>
  );
}
