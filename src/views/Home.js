import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../component/Loader';
import ProductCard from '../component/ProductCard';

const Home = () => {
  const url =
    'https://5fb3b881b6601200168f7c43.mockapi.io/products?page=1&limit=10';

  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let content = null;

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setProducts({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch((error) => {
        setProducts({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  if (products.error) {
    content = <h1>The product does not exist</h1>;
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = products.data.map((product) => {
      return <ProductCard product={product} key={product.id} />;
    });
  }

  return (
    <div>
      <h1 className='font-bold text-2xl'>Best Sellers</h1>
      {content}
    </div>
  );
};

export default Home;
