import {
  Facebook,
  Instagram,
  // WhatsApp,
  Twitter,
  YouTube,
  Home,
  HomeRepairService,
  RecordVoiceOver,
  ContactMail,
  PlaylistAddCheck,
} from '@mui/icons-material';
import { Nav } from "../../../interfaces";
import { NAVIGATE_TO, NAVIGATE_NAME } from '../../../router/routes/routes';

export const sectionNavigation: Nav[] = [
  {
    name: NAVIGATE_NAME.HOME,
    to: NAVIGATE_TO.HOME,
    Icon: Home
  },
  {
    name: NAVIGATE_NAME.FEATURES,
    to: NAVIGATE_TO.FEATURES,
    Icon: PlaylistAddCheck
  },
  {
    name: NAVIGATE_NAME.SERVICES,
    to: NAVIGATE_TO.SERVICES,
    Icon: HomeRepairService
  },
  /* {
    name: 'Blog',
    to: '#blog',
    // Icon: ''
  }, */
  {
    name: NAVIGATE_NAME.TESTIMONIALS,
    to: NAVIGATE_TO.TESTIMONIALS,
    Icon: RecordVoiceOver
  },
  {
    name: NAVIGATE_NAME.CONTACT,
    to: NAVIGATE_TO.CONTACT,
    Icon: ContactMail
  },
];

export const footerSection: Nav[] = [
  {
    name: 'Link 1',
    to: '/test',
    // Icon: ''
  },
  {
    name: 'Link 2',
    to: '/test',
    // Icon: ''
  },
  {
    name: 'Link 3',
    to: '/test',
    // Icon: ''
  },
  {
    name: 'Link 4',
    to: '/test',
    // Icon: ''
  },
];

export const socialLinks: Nav[] = [
  {
    name: 'Facebook',
    to: '/test',
    Icon: Facebook
  },
  {
    name: 'Twitter',
    to: '/test',
    Icon: Twitter
  },
  {
    name: 'Instagram',
    to: '/test',
    Icon: Instagram
  },
  {
    name: 'YouTube',
    to: '/test',
    Icon: YouTube
  },
];