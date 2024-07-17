'use client'
import React, { useEffect, useState } from 'react';
import PageWrapper from '../PageWrapper';
import ProductCard from '../../components/ProductCard/ProductCard';

interface Product {
  ProductID: number;
  ProductName: string;
  ProductPhotoURL: string;
  ProductStatus: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/');
        const data = await response.json();
        setProducts(data.filter((product: Product) => product.ProductStatus === 'Active'));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold text-white mb-8">Our Products</h1>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard
            key={product.ProductID}
            id={product.ProductID}
            name={product.ProductName}
            imageUrl={product.ProductPhotoURL}
          />
        ))}
      </div>
    </PageWrapper>
  );
};

export default ProductsPage;