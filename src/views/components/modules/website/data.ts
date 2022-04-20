import {
  AddTask,
  CalendarMonth,
  EmojiEvents
} from '@mui/icons-material';
import Student from '../../../assets/img/Student.svg';
import Teacher from '../../../assets/img/Teacher.svg';
export const heroSection = {
  title: '',
  subtitle: '',
};

export const featuresSection = [
  {
    title: 'Feature 1',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia doloribus vero explicabo aut harum sit.',
    Icon: AddTask
  },
  {
    title: 'Feature 2',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia doloribus vero explicabo aut harum sit.',
    Icon: CalendarMonth
  },
  {
    title: 'Feature 3',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia doloribus vero explicabo aut harum sit.',
    Icon: EmojiEvents
  },
];

export const servicesSection = [
  {
    title: 'Become a Teacher',
    // subtitle: '',
    image: Teacher,
    description: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
    type: 'teacher',
    buttonText: 'Sign Up as Teacher'
  },
  {
    title: 'I\'m a Student',
    // subtitle: '',
    image: Student,
    description: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
    type: 'student',
    buttonText: 'Start as Student'
  },
]