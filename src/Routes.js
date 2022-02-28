import React from 'react';
import { Switch,Route } from 'react-router-dom';

import NotFound from './pages/NotFound/NotFound'
import Header from './components/partials/Header/Header'
import Product from './pages/Product/Product'

 const Routes = () => {
  return(
    <Switch>
  
      <Route exact path="/">
      <Header/>
      <Product></Product>
      </Route>
      <Route>

        <NotFound/>
      </Route>
    </Switch>
  );
}

export default Routes;