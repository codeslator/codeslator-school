import { FC } from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const Testimonials: FC = () => {
  return (
    <Box component="section" id="#testimonials" sx={{ mb: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" color="primary" align="center">Testimonials</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              Ehat our costumers are saying...
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Carousel>
            <Box width="200px" height="200px">Hola</Box>
            <Box width="200px" height="200px">Hola</Box>
            <Box width="200px" height="200px">Hola</Box>
          </Carousel>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;