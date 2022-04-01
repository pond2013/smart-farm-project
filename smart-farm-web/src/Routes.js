import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './modules/home/home';
import Login from './modules/login/login';
import Register from './modules/register/register';
import Test from './modules/test/test';
import Time from './modules/time/time';
import Temp from './modules/temp/temp';
import Humid from './modules/humid/humid';
import SoilHumid from './modules/soil-humid/soil-humid'
import Graph from './modules/graph/graph'
import Setting from './modules/setting/setting'

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/home',
    component: Home,
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
  {
    path: '/time',
    component: Time,
    exact: true
  },
  {
    path: '/temp',
    component: Temp,
    exact: true
  },
  {
    path: '/humid',
    component: Humid,
    exact: true
  },
  {
    path: '/soilHumid',
    component: SoilHumid,
    exact: true
  },
  {
    path: '/graph',
    component: Graph,
    exact: true
  },
  {
    path: '/setting',
    component: Setting,
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