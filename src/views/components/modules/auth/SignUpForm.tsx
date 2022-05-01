import { FC } from 'react';
import { Formik } from 'formik';
import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography, FormHelperText } from '@mui/material';
import { SIGN_UP_INITIAL_VALUES, SIGN_UP_VALIDATION_SCHEMA } from '../../validations/authValidations';

const SignUpForm: FC = () => {
  return (
    <Formik
      initialValues={SIGN_UP_INITIAL_VALUES}
      validationSchema={SIGN_UP_VALIDATION_SCHEMA}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleSubmit,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h5" align="center">
                Sign Up
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="firstName"
                id="firstName"
                label="First Name"
                fullWidth
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="lastName"
                id="lastName"
                label="Last Name"
                fullWidth
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                name="email"
                id="email"
                label="Email Address"
                fullWidth
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                name="password"
                id="password"
                label="Password"
                fullWidth
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                label="Password Confirmation"
                fullWidth
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
                helperText={touched.passwordConfirm && errors.passwordConfirm}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={(
                  <Checkbox
                    name="terms"
                    value={values.terms}
                    checked={values.terms}
                    color="primary"
                    onChange={handleChange}
                  />
                )}
                label="Accept terms and conditions?"
              />
              <FormHelperText error={Boolean(touched.terms && errors.terms)}>{touched.terms && errors.terms}</FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
              >
                Create Account
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm