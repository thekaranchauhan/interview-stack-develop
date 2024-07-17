// @ts-nocheck
import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Product ID: {id}</p>
      </div>
    </div>
  );
};

export default ProductCard;