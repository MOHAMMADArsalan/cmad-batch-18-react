import React from 'react';

import { BrowserRouter , Route ,withRouter } from 'react-router-dom';
import Home from './Home';

const Router = () => {
  return(
    <BrowserRouter>
      <Route path="/" component={Home} />
    
    
    
    </BrowserRouter>
  )
}


export default withRouter(Router)
