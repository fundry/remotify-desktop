import React, { useState } from 'react';
import Features from './features';
import About from './about';

const main = (props) => {
  const { visible } = props;

  return (
    <div>
      <About />
      <Features />
    </div>
  );
};

export default main;
