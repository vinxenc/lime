import * as React from 'react';
import * as Loadable from 'react-loadable';

import Loading from './components/loading/Loading';

const delay: number = 2000;
const timeout: number = 10000;

interface RouteLoadable {
    path: string, 
    exact: boolean, 
    name: string, 
    component: React.ComponentType<unknown> & Loadable.LoadableComponent 
}

// Pages
const Home = Loadable({
    loader: () => import('./pages/home/Home'),
    loading: Loading,
    delay,
    timeout,
});
const Login = Loadable({
    loader: () => import('./pages/login/Login'),
    loading: Loading,
    delay,
    timeout,
});
const Error = Loadable({
    loader: () => import('./pages/error/Error'),
    loading: Loading,
    delay,
    timeout,
});

const routes: RouteLoadable[] = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/error', exact: true, name: 'Error', component: Error },
];

export default routes;