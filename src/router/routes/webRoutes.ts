import { lazy } from 'react';
import { Route } from '../../interfaces/index';

const WebsitePage = lazy(() => import(/* webpackChunkName: "WebsitePage" */ '../../views/pages/WebsitePage'));

export const webRoutes: Route[] = [
  {
    path: '/',
    to: '/',
    Component: WebsitePage,
    name: 'Home',
  }
];