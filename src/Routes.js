import React from 'react';
import { Switch,Route } from 'react-router-dom';

import NotFound from './pages/NotFound/NotFound'

 const Routes = () => {
  return(
    <Switch>
      <Route exact path="/">
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
}

export default Routes;