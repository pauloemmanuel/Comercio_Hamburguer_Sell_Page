import React from 'react';
import { Switch,Route } from 'react-router-dom';

import NotFound from './pages/NotFound/NotFound'
import Header from './components/partials/Header'
import Product from './pages/Product'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './Reducers';
const store = createStore(Reducers);

 const Routes = () => {
  return(
    <Provider store={store}>
    <Switch>
      <Route exact path="/">
      <Header/>
      <Product></Product>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
    </Provider>
   
  );
}

export default Routes;