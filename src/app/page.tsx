import NFTTable from "@/components/nft-table";

export default function Home() {
  const data = [
    {
      id: 1,
      name: "Luxury Watch #1",
      description: "A rare luxury watch with a diamond-encrusted bezel.",
      image_url:
        "https://sothebys-md.brightspotcdn.com/dims4/default/ad94164/2147483647/strip/true/crop/1000x1000+0+0/resize/385x385!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F22%2Fe7%2F76f2e7b14d40911137cdd0c60d25%2Fbirkinboxes-birkin25.jpg",
      owner: {
        id: 101,
        name: "John Doe",
        wallet_address: "0x123456789abcdef",
        email: "john.doe@example.com",
      },
      details: {
        brand: "Rolex",
        model: "Submariner",
        year: 2020,
        material: "18k Gold",
        price: 25000,
      },
    },
    {
      id: 2,
      name: "Luxury Handbag #1",
      description: "A designer handbag made from the finest leather.",
      image_url: "https://example.com/images/luxury_handbag_1.jpg",
      owner: {
        id: 102,
        name: "Jane Smith",
        wallet_address: "0xabcdef123456789",
        email: "jane.smith@example.com",
      },
      details: {
        brand: "Hermès",
        model: "Birkin",
        year: 2021,
        material: "Leather",
        price: 15000,
      },
    },
    {
      id: 3,
      name: "Luxury Car #1",
      description: "A limited edition sports car with cutting-edge technology.",
      image_url: "https://example.com/images/luxury_car_1.jpg",
      owner: {
        id: 103,
        name: "Mike Johnson",
        wallet_address: "0x987654321fedcba",
        email: "mike.johnson@example.com",
      },
      details: {
        brand: "Ferrari",
        model: "LaFerrari",
        year: 2019,
        material: "Carbon Fiber",
        price: 3000000,
      },
    },
    {
      id: 4,
      name: "Luxury Yacht #1",
      description: "A state-of-the-art yacht with luxurious amenities.",
      image_url: "https://example.com/images/luxury_yacht_1.jpg",
      owner: {
        id: 104,
        name: "Alice Williams",
        wallet_address: "0xabcdefabcdef1234",
        email: "alice.williams@example.com",
      },
      details: {
        brand: "Sunseeker",
        model: "Predator 50",
        year: 2022,
        material: "Fiberglass",
        price: 1000000,
      },
    },
    {
      id: 5,
      name: "Luxury Jewelry #1",
      description: "An exquisite diamond necklace with a platinum chain.",
      image_url: "https://example.com/images/luxury_jewelry_1.jpg",
      owner: {
        id: 105,
        name: "Emma Brown",
        wallet_address: "0x1234abcd5678efgh",
        email: "emma.brown@example.com",
      },
      details: {
        brand: "Tiffany & Co.",
        model: "Victoria",
        year: 2021,
        material: "Platinum",
        price: 50000,
      },
    },
  ];

  return (
    <div className="rounded border border-gray-800 px-4 py-2">
      <h1 className="text-xl font-bold">NFTs for sale</h1>
        <NFTTable nfts={data}></NFTTable>
    </div>
  );
}
