import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './modules/home/home';
import Login from './modules/login/login';
import Main from './modules/main/main';
import Register from './modules/register/register';
import Temp from './modules/temp/temp';
import Time from './modules/time/time';
import addTemp from './modules/addtemp/addtemp';
import Setting from './modules/setting/setting';


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
    path: '/main',
    component: Main,
    exact: true
  },
  {
    path: '/temp',
    component: Temp,
    exact: true
  },
  {
    path: '/addtemp',
    component: addTemp,
    exact: true
  },
  {
    path: '/time',
    component: Time,
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