import axios from "axios";
import { Property, Review } from "./types";

// Use NEXT_PUBLIC_API_BASE_URL when provided, otherwise fall back to relative paths
const BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
const url = (path: string) => {
  // If a base is provided (e.g., NEXT_PUBLIC_API_BASE_URL='https://api.example.com' or '/api'), use it.
  // Otherwise, default to the internal Next.js API route under `/api`.
  const defaultPrefix = "/api";
  const effectiveBase = BASE || defaultPrefix;
  return `${effectiveBase}${path.startsWith("/") ? path : `/${path}`}`;
};

// Fetch all properties
export async function fetchProperties(): Promise<Property[]> {
  const response = await axios.get<Property[]>(url("/properties"));
  return response.data;
}

// Fetch single property by ID
export async function fetchPropertyById(id: string): Promise<Property> {
  const response = await axios.get<Property>(url(`/properties/${id}`));
  return response.data;
}

// Fetch reviews for a property by ID
export async function fetchReviewsByPropertyId(id: string): Promise<Review[]> {
  const response = await axios.get<Review[]>(url(`/properties/${id}/review`));
  return response.data;
}

// Optional: Fetch property + reviews together
export async function fetchPropertyWithReviews(
  id: string
): Promise<Property & { reviews: Review[] }> {
  const [propertyRes, reviewsRes] = await Promise.all([
    axios.get<Property>(url(`/properties/${id}`)),
    axios.get<Review[]>(url(`/properties/${id}/review`)),
  ]);

  return {
    ...propertyRes.data,
    reviews: reviewsRes.data,
  };
}