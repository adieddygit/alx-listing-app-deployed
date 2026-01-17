import React from "react";
import Link from "next/link";
import { Property } from "../../lib/types";
import Image from "next/image"; // reuse shared type

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/properties/${property.id}`} passHref>
      <div className="border rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-white">
        {/* Property Image */}
        <Image
          src={property.image || "/assets/images/image19.png"}
          alt={property.title}
          width={600}
          height={240}
          className="w-full h-48 object-cover rounded-md mb-4"
        />

        {/* Title & Location */}
        <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
        <p className="text-gray-600 mb-2">📍 {property.location}</p>

        {/* Description */}
        <p className="text-gray-700 mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Price */}
        <p className="text-lg font-bold text-green-600">
          ${property.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default PropertyCard;