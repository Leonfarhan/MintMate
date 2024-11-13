import { NextResponse } from "next/server";
import { ThirdwebStorage } from "@thirdweb-dev/storage";

const storage = new ThirdwebStorage();

export async function POST(req: Request) {
  try {
    const { name, image } = await req.json();

    // Upload image to IPFS
    const imageUri = await storage.upload(image);

    // Create metadata
    const metadata = {
      name,
      image: imageUri,
      description: `Created with MintMate`,
    };

    // Upload metadata to IPFS
    const uri = await storage.upload(metadata);

    return NextResponse.json({ uri });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload to IPFS" },
      { status: 500 }
    );
  }
}