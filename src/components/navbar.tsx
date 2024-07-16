import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <nav className="bg-gray-100 w-full text-lg">
      <div className="container mx-auto max-w-6xl justify-between flex p-4 items-center">
        <div className="flex items-baseline">
          <Link href="/">
            <h1 className="font-black text-2xl">Digital Elite</h1>
          </Link>
          <Link href="/marketplace" className="ml-8 hover:text-gray-600">
            Marketplace
          </Link>
          <Link href="/my-nfts" className="ml-8 hover:text-gray-600">
            My NFTs
          </Link>
          <Link href="/dashboard" className="ml-8 hover:text-gray-600">
            Dashboard
          </Link>
        </div>
        <Button variant="outline" className="">
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
}
