import withRoot from './WithRoot';
// --- Post bootstrap -----
import React from 'react';
// import Footer from './Footer';
// import Header from './Header'
import BodyLayout from './BodyLayout';
// import ProductHero from './modules/views/ProductHero';
// import ProductValues from './modules/views/ProductValues';
// import ProductHowItWorks from './modules/views/ProductHowItWorks';
// import ProductCTA from './modules/views/ProductCTA';
// import AppAppBar from './modules/views/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      
      < BodyLayout />

    </React.Fragment>
  );
}

export default withRoot(Index);