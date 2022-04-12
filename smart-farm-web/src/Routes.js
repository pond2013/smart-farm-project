import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './modules/home/home';
import Login from './modules/login/login';
import Main from './modules/main/main';
import Register from './modules/register/register';
import addTemp from './modules/temp/addtemp/addtemp';
import addTime from './modules/time/addtime/addtime';
import addHumid from './modules/humid/addhumid/addhumid';
import addSoilHumid from './modules/soil-humid/addsoil-humid/addsoil-humid';
import Time from './modules/time/time';
import Temp from './modules/temp/temp';
import Humid from './modules/humid/humid';
import SoilHumid from './modules/soil-humid/soil-humid'
import Graph from './modules/graph/graph'
import Setting from './modules/setting/setting'
import ProfileSetting from './modules/profile-setting/profile-setting';

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
    path: '/profile-setting',
    component: ProfileSetting,
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
    path: '/addtime',
    component: addTime,
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
    path: '/addhumid',
    component: addHumid,
    exact: true
  },
  {
    path: '/addsoilHumid',
    component: addSoilHumid,
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