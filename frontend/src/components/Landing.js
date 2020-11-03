import withRoot from './withRoot';
import React from 'react';

import Body from './Body';
import HowItWorks from './HowItWorks';
import WeServe from './weServe';

function Index() {
  return (
    <React.Fragment>
  
      <Body />
      <HowItWorks />
      <WeServe />
    </React.Fragment>
  );
}

export default withRoot(Index);