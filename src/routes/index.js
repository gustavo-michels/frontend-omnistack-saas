import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import Main from 'pages/Main';
import SignUp from 'pages/Auth/SignUp';
import SignIn from 'pages/Auth/SignIn';

import Private from './private';
import Guest from './guest';

import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/register" component={SignUp} />
      <Private path="/" exact component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
