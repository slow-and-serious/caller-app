import withRoot from './withRoot';
import React from 'react';
import ProductHero from './ProductHero';

function Index() {
  return (
    <React.Fragment>
  
      <ProductHero />
      
    </React.Fragment>
  );
}

export default withRoot(Index);