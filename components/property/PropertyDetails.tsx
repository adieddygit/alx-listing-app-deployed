import React from "react";
import { Property } from "@/lib/types";
import Image from "next/image";

interface PropertyDetailsProps {
    property: Property;
}

const PropertyDetail: React.FC<PropertyDetailsProps> = ({ property }) => {
    return (
        <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
            {/* Property Image */}
            <Image
            src={property.image || "/assets/images/Hero.jpg"}
            alt={property.title}
            width={1200}
            height={600}
            className="w-full h-64 object-cover rounded-md mb-6"
            />

            {/* Property Info */}
            <h1>{property.title}</h1>
            <p>{property.location}</p>
            <p>{property.description}</p>

            {/* Price */}
            <p>${property.price.toLocaleString()}</p>

        </div>
    )
}

export default PropertyDetail;