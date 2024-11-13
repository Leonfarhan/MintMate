"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useContract, useContractWrite, useAddress } from "@thirdweb-dev/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Upload, Loader2 } from "lucide-react";

const CONTRACT_ADDRESS = "0xA895a9b5882DBa287CF359b6a722C5be46aCb675";

export function MintNFTForm() {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const address = useAddress();
  
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { mutateAsync: mintNFT, isLoading: isMinting } = useContractWrite(contract, "mintNFT");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1,
  });

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !name || !address) return;

    try {
      setIsUploading(true);
      // Upload image to IPFS
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          image: file,
        }),
      });
      
      const data = await response.json();
      
      // Mint NFT
      await mintNFT({ args: [address, data.uri] });
      
      toast.success("NFT minted successfully!");
      setFile(null);
      setName("");
    } catch (error) {
      toast.error("Failed to mint NFT. Please try again.");
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleMint} className="mx-auto max-w-lg space-y-6">
      <div>
        <Label htmlFor="name">NFT Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter NFT name"
          className="mt-1.5"
        />
      </div>

      <div>
        <Label>Image</Label>
        <div
          {...getRootProps()}
          className={`mt-1.5 cursor-pointer rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
            isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
          {file ? (
            <p className="mt-2 text-sm text-muted-foreground">
              Selected: {file.name}
            </p>
          ) : (
            <p className="mt-2 text-sm text-muted-foreground">
              {isDragActive
                ? "Drop your image here"
                : "Drag & drop an image, or click to select"}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={!file || !name || isUploading || isMinting || !address}
      >
        {isUploading || isMinting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {isUploading ? "Uploading..." : "Minting..."}
          </>
        ) : (
          "Mint NFT"
        )}
      </Button>

      {!address && (
        <p className="text-sm text-muted-foreground text-center">
          Please connect your wallet to mint NFTs
        </p>
      )}
    </form>
  );
}