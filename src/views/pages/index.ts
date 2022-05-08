import { lazy } from 'react';

// Lazy views
export const WebsitePage = lazy(() => import(/* webpackChunkName: "WebsitePage" */ './WebsitePage'));
export const SignUpPage = lazy(() => import(/* webpackChunkName: "SignUpPage" */ './SignUpPage'));
export const SignInPage = lazy(() => import(/* webpackChunkName: "SignInPage" */ './SignInPage'));
export const TestPage = lazy(() => import(/* webpackChunkName: "TestPage" */ './TestPage'));