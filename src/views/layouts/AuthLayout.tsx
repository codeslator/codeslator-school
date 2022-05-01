import { FC } from 'react';
import { Box, Grid, Paper } from '@mui/material';
// import { Image } from 'mui-image';
import { Outlet } from 'react-router-dom';
import Brand from './auth/Brand';

const AuthLayout: FC = () => {
  return (
    <Grid
      container
      component="main"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #fd885b 70%, #fea98a 30%)',
        overflow: 'hidden',
      }}
    >
      <Grid item xs={false} sm={false} md={6} />
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Brand />
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={10} lg={9}>
              <Outlet />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default AuthLayout;