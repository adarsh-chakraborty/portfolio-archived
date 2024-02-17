import React from 'react';
import loadingSvg from './loading.svg';

const Preloader = () => {
  return <img src={loadingSvg} alt="Loading..." className="mx-auto" />;
};

export default Preloader;
