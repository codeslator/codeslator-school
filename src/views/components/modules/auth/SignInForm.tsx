import { FC } from 'react';
import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import { SIGN_IN_INITIAL_VALUES, SIGN_IN_VALIDATION_SCHEMA } from '../../validations/authValidations';

const SignInForm: FC = () => {
  return (
    <Formik
      initialValues={SIGN_IN_INITIAL_VALUES}
      validationSchema={SIGN_IN_VALIDATION_SCHEMA}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleSubmit,
        values,
        handleChange,
        handleBlur,
        errors,
        touched
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h5" align="center">
                Sign In
              </Typography>
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
              <FormControlLabel
                control={(
                  <Checkbox
                    name="remember"
                    value={values.remember}
                    checked={values.remember}
                    color="primary"
                    onChange={handleChange}
                  />
                )}
                label="Remember me"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  )
}

export default SignInForm