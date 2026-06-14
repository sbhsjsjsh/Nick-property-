export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'Buy' | 'Rent';
  bhk: string;
  area: string;
  imageUrl: string;
  isVerified: boolean;
  tags: string[];
}
