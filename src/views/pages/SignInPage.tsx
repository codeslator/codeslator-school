import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Grid,
  Link,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import { SignInForm } from '../components/modules/auth';

const SignInPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CodeSchool | Sign In</title>
      </Helmet>
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SignInForm />
          </Grid>
          <Grid item xs={12}>
            <Grid container textAlign="center">
              <Grid item xs={12}>
                <Link component={RouterLink} to="/sign-up" variant="body2" color="secondary">Don't have an account? Sign Up</Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="#" variant="body2" color="secondary">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignInPage;