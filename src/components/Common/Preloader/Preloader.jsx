import React from 'react';
import preloadAnimation from './PreloadGradient.gif';
import s from './Prelosder.module.css';

const preloader = props => {
  return (
    <div className={s.preloader}>
      <img src={preloadAnimation} alt="preload animation" />
    </div>
  );
};

export default preloader;
