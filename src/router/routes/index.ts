import { RouteParent } from "../../interfaces";
import { LandingPageLayout, AuthLayout } from "../../views/layouts";
import { SignInPage, WebsitePage, SignUpPage } from "../../views/pages";
import { ROUTES } from './routes';

export const routes: RouteParent[] = [
  {
    path: ROUTES.ROOT,
    Layout: LandingPageLayout,
    children: [
      { path: ROUTES.ROOT, Component: WebsitePage }
    ]
  },
  {
    path: ROUTES.AUTH,
    Layout: AuthLayout,
    children: [
      { path: ROUTES.SIGN_IN, Component: SignInPage },
      { path: ROUTES.SIGN_UP, Component: SignUpPage },
      // { path: '*', Component: <Navigate to="/404" /> }
    ]
  },
];