import { FC } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import { servicesSection } from './data';
import ServiceCard from './ServiceCard';

const Services: FC = () => {
  return (
    <Box component="section" id="#services" sx={{ mb: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" color="primary" align="center">Services</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ratione ullam alias assumenda veniam nobis?
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ my: 2 }} justifyContent="space-evenly">
          {servicesSection.map((service, index) => (
            <Grid item xs={12} sm={12} md={5} key={index}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;