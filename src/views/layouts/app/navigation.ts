import { Dashboard, CalendarViewMonth, Payment, Settings } from '@mui/icons-material';
import { AccountTie } from 'mdi-material-ui';
import { Nav } from '../../../interfaces';
import { ROUTE_TO, NAVIGATE_NAME } from '../../../router/routes/routes';

export const teacherNavigation: Nav[] = [
  {
    name: NAVIGATE_NAME.DASHBOARD,
    to: ROUTE_TO.DASHBOARD,
    Icon: Dashboard,
  },
  {
    name: NAVIGATE_NAME.TEACHERS,
    to: ROUTE_TO.TEACHERS,
    Icon: AccountTie,
  },
  {
    name: NAVIGATE_NAME.SCHEDULE,
    to: ROUTE_TO.SCHEDULE,
    Icon: CalendarViewMonth,
  },
  {
    name: NAVIGATE_NAME.PAYMENTS,
    to: ROUTE_TO.PAYMENTS,
    Icon: Payment,
  },
  {
    name: NAVIGATE_NAME.SETTINGS,
    to: ROUTE_TO.SETTINGS,
    Icon: Settings,
  },
];

export const studentNavigation: Nav[] = [
  {
    name: NAVIGATE_NAME.DASHBOARD,
    to: ROUTE_TO.DASHBOARD,
    Icon: Dashboard,
  },
  {
    name: NAVIGATE_NAME.TEACHERS,
    to: ROUTE_TO.TEACHERS,
    Icon: AccountTie,
  },
  {
    name: NAVIGATE_NAME.SCHEDULE,
    to: ROUTE_TO.SCHEDULE,
    Icon: CalendarViewMonth,
  },
  {
    name: NAVIGATE_NAME.PAYMENTS,
    to: ROUTE_TO.PAYMENTS,
    Icon: Payment,
  },
  {
    name: NAVIGATE_NAME.SETTINGS,
    to: ROUTE_TO.SETTINGS,
    Icon: Settings,
  },
];