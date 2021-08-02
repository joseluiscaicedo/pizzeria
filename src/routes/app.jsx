import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import Details from '../components/Details';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/Detalles' component={Details} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
