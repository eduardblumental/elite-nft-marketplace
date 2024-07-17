import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { NFT } from "@/lib/definitions";

export function NFTCard({ nft }: { nft: NFT }) {
  return (
    <Card>
      <CardHeader className="px-6 py-4">{nft.details.brand}</CardHeader>
      <CardContent>
        <div className="relative bg-gray-200 rounded-2xl pb-[100%] w-full">
          <img
            className="absolute w-full h-full rounded-2xl object-cover"
            src={nft.image_url}
            alt="Image not found"
          />
        </div>
        <CardTitle className="text-lg mt-4">{nft.name}</CardTitle>
        <CardDescription className="truncate">
          {nft.description}
        </CardDescription>
        <CardFooter className="mt-6 p-0 flex justify-between">
          <div>
            <span>{nft.details.price} $</span>
          </div>
          <Button>Buy</Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
