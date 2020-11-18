import React from 'react';
import Loader from '../component/Loader';
import ProductCard from '../component/ProductCard';
import useAxiosGet from '../hooks/HttpRequest';

const Home = () => {
  const url =
    'https://5fb3b881b6601200168f7c43.mockapi.io/products?page=1&limit=10';

  let content = null;

  let products = useAxiosGet(url);

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
