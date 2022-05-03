import {
  AppRegistration,
  Login
} from '@mui/icons-material';
import { Nav } from "../../../interfaces";
import { NAVIGATE_NAME, ROUTE_TO } from '../../../router/routes/routes';

export const authNavigation: Nav[] = [
  {
    name: NAVIGATE_NAME.LOGIN,
    to: ROUTE_TO.SIGN_IN,
    Icon: Login
  },
  {
    name: NAVIGATE_NAME.REGISTER,
    to: ROUTE_TO.SIGN_UP,
    Icon: AppRegistration
  }
];

