// src/pages/index.tsx
"use client"
import { useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [productId, setProductId] = useState<number | string>('');
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/products/${productId}`);
      setProduct(response.data);
      setError(null);
    } catch (err) {
      setError('Product not found');
      setProduct(null);
    }
  };

  return (
    <div>
      <h1>Welcome to the Amazon Clone</h1>
      <input
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Enter Product ID"
        className='text-black'
      />
      <button onClick={fetchProduct}>Get Product Details</button>
      {product && (
        <div>
          <h2>Product Details</h2>
          <p>ID: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;
