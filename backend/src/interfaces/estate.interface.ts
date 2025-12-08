interface EstateInterface {
  title: string;
  description: string;
  price: number;
  type: 'casa' | 'departamento' | 'terreno';
  rooms: number;
  bathrooms: number;
  size: number; // m²
  address: string;
  images: string[];
}


export { EstateInterface }