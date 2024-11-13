"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Ethereum } from "lucide-react";

interface NFTCardProps {
  name: string;
  image: string;
  creator: string;
  creatorAddress: string;
}

export function NFTCard({ name, image, creator, creatorAddress }: NFTCardProps) {
  return (
    <Card className="group overflow-hidden">
      <CardHeader className="p-0">
        <AspectRatio ratio={1}>
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="line-clamp-1">{name}</CardTitle>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`https://avatar.vercel.sh/${creatorAddress}`} />
            <AvatarFallback>
              <Ethereum className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="text-sm text-muted-foreground">
            by <span className="font-medium text-foreground">{creator}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}