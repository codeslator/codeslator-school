import {
  AppRegistration,
  Login
} from '@mui/icons-material';
import { Nav } from "../../../interfaces";

export const authNavigation: Nav[] = [
  {
    name: 'Log In',
    to: '/sign-in',
    Icon: Login
  },
  {
    name: 'Register',
    to: '/sign-up',
    Icon: AppRegistration
  }
];

