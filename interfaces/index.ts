export interface PropertyProps {
  id:number;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string; // no discount if string is empty
}

export interface ImageProps{
  src: object;
  alt: string
  fill: ""
}
