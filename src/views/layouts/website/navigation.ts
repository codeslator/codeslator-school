import {
  Facebook,
  Instagram,
  // WhatsApp,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import { Nav } from "../../../interfaces";

export const sectionNavigation: Nav[] = [
  {
    name: 'Home',
    to: '#home',
    // Icon: ''
  },
  {
    name: 'Services',
    to: '#services',
    // Icon: ''
  },
  /* {
    name: 'Blog',
    to: '#blog',
    // Icon: ''
  }, */
  {
    name: 'Testimonials',
    to: '#testimonials',
    // Icon: ''
  },
  {
    name: 'Contact',
    to: '#contact',
    // Icon: ''
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