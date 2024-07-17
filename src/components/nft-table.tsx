import { NFTCard } from "@/components/nft-card";
import { NFT } from "@/lib/definitions";

export default function NFTTable({ nfts }: { nfts: NFT[] }) {
  return (
    <div className="mt-6 grid grid-cols-3 gap-4">
      {nfts.map((nft) => {
        return (
          <NFTCard key={nft.id} nft={nft} />
        );
      })}
    </div>
  );
}
