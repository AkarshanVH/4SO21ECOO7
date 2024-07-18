import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const Products = () => {
  const [products, setProducts] = useState([]);

  // Replace with your logic to fetch data from e-commerce company APIs
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="products-container">
      <h1>Top Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Products;