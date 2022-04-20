import { FC } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Image } from 'mui-image';
import Background from '../../../assets/img/background.svg';
import Meeting from '../../../assets/img/Meeting.svg';

const Hero: FC = () => {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Box
      component="section"
      id="#home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${Background})`,
        backgroundSize: {
          xs: 'cover',
          lg: 'contain'
        },
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Container maxWidth="xl">
              <Typography variant="h3" color="secondary" gutterBottom>¿Necesitas un profesor?</Typography>
              <Typography variant="h5" gutterBottom>Te ayudamos a agendar fácilmente una clase On-line con los mejores profesores.</Typography>
              <Button component={Link} to="/sign-up" variant="contained" color="secondary" size="large">Comenzar Ahora</Button>
            </Container>
          </Grid>
          {breakpoint && (
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Image src={Meeting} alt="meeting" width="90%" />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;