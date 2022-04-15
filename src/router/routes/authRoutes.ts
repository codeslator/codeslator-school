import { lazy } from "react";
import { Route } from "../../interfaces";


const SignInPage = lazy(() => import(/* webpackChunkName: "SignInPage" */ '../../views/pages/SignInPage'));
const SignUpPage = lazy(() => import(/* webpackChunkName: "SignUpPage" */ '../../views/pages/SignUpPage'));

export const authRoutes: Route[] = [
  {
    path: '/sign-in',
    to: 'sign-in',
    Component: SignInPage,
    name: 'Sign In'
  },
  {
    path: '/sign-up',
    to: 'sign-up',
    Component: SignUpPage,
    name: 'Sign Up'
  },
]