import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './modules/home/home';
import Login from './modules/login/login';
import Register from './modules/register/register';
import Test from './modules/test/test';

const routes = [
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/register',
    component: Register,
    exact: true
  },
  {
    path: '/test',
    component: Test,
    exact: true
  },
];

export default function Routes() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} exact={route.exact} path={`${route.path}`} component={route.component} />
        ))}
        <Redirect exact from="*" to="/home" />
    </Switch>
  );
}