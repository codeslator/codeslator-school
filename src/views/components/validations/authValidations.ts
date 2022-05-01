import * as Yup from 'yup';

export const SIGN_IN_INITIAL_VALUES = {
  email: '',
  password: '',
  remember: false,
};

export const SIGN_IN_VALIDATION_SCHEMA = Yup.object({
  email: Yup.string().email('Must be a valid E-mail').max(255).required('E-mail is required'),
  password: Yup.string().max(255).required('Password is required'),
  remember: Yup.boolean(),
});

export const SIGN_UP_INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  password:  '',
  passwordConfirm: '',
  terms: false,
};

export const SIGN_UP_VALIDATION_SCHEMA = Yup.object({
  firstName: Yup.string().min(2).max(20).required('First Name is required'),
  lastName: Yup.string().min(2).max(20).required('Last Name is required'),
  email: Yup.string().email('Must be a valid E-mail').max(255).required('E-mail is required'),
  password:  Yup.string().max(255).required('Password is required'),
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password confirmation is required'),
  terms: Yup.boolean().oneOf([true], 'Must accept Terms and Conditions'),
});