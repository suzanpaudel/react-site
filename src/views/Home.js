import React from 'react';
import HelloWorld from '../component/HelloWorld';

const Home = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl'>This is the home page</h1>
      <HelloWorld name='Sujan' />
    </div>
  );
};

export default Home;
