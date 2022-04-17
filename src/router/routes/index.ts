import { RouteParent } from "../../interfaces";
import { LandingPageLayout, AuthLayout } from "../../views/layouts";
import { SignInPage, WebsitePage, SignUpPage } from "../../views/pages";

export const routes: RouteParent[] = [
  {
    path: '/',
    Layout: LandingPageLayout,
    children: [
      { to: 'root', path: '', Component: WebsitePage }
    ]
  },
  {
    path: '/auth',
    Layout: AuthLayout,
    children: [
      { to: 'sign-in', path: '/sign-in', Component: SignInPage },
      { to: 'sign-up', path: '/sign-up', Component: SignUpPage },
      // { path: '*', Component: <Navigate to="/404" /> }
    ]
  },
]