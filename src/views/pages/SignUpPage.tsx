import { FC } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Box, Grid, Link } from "@mui/material";
import { SignUpForm } from "../components/modules/auth";

const SignUpPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CodeSchool | Sign Up</title>
      </Helmet>
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SignUpForm />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item>
                <Link component={RouterLink} to="/sign-in" variant="body2" color="secondary">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignUpPage;
