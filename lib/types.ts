export interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    rating?: number;
    image: string;
}

export interface Review {
    id: string;
    author: string;
    rating: number;
    comment: string;
}