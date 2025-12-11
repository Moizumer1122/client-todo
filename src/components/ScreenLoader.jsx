// src/components/Loader.jsx
import React from 'react';
import { Spin } from 'antd';

const Loader = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center '>
    <div className="loader-container">
      <Spin size={'large'} />
    </div>
    </div>
  );
};

export default Loader;
