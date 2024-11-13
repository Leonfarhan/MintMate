import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl text-center">
      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
        Create{" "}
        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          Digital Art
        </span>
        {" "}NFTs
      </h1>
      <p className="mt-8 text-xl leading-8 text-muted-foreground">
        Transform your digital creations into NFTs on the Ethereum Sepolia testnet.
        Simple, secure, and seamless.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Button size="lg" className="h-12 px-8 rounded-full">
          Start Creating
        </Button>
        <Button size="lg" variant="outline" className="h-12 px-8 rounded-full">
          View Gallery
        </Button>
      </div>
    </section>
  );
}