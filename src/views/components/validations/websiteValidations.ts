import * as Yup from 'yup';

export const CONTACT_INITIAL_VALUES = {
  fullName: '',
  email: '',
  message: '',
};

export const CONTACT_VALIDATION_SCHEMA = Yup.object({
  fullName: Yup.string().max(60).required('Full Name is required'),
  email: Yup.string().email('Must be a valid E-mail').max(255).required('E-mail is required'),
  message: Yup.string().max(255).required('Message is required'),
});