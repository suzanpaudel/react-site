import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../component/Loader';
import useAxiosGet from '../hooks/HttpRequest';

const Product = () => {
  const { id } = useParams();
  const url = `https://5fb3b881b6601200168f7c43.mockapi.io/products/${id}`;

  let product = useAxiosGet(url);

  let content = null;

  if (product.loading) {
    content = <Loader />;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className='text-2xl font-bold mb-3'>{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className='font-bold text-xl mb-3'>$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  if (product.error) {
    content = <h1>The product does not exist</h1>;
  }

  return <div>{content}</div>;
};

export default Product;
