export interface NFT {
  id: number;
  name: string;
  description: string;
  image_url: string;
  owner: {
    id: number;
    name: string;
    wallet_address: string;
    email: string;
  };
  details: {
    brand: string;
    material: string;
    price: number;
  };
}
