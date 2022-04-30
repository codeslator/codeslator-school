import { FC } from 'react';
import { Box, Container, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { testimonialsSection } from './data';
import TestimonialCard from './TestimonialCard';

const Testimonials: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
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
        <Box sx={{ my: 2 }}>
          <Swiper
            slidesPerView={matches ? 1 : 3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            loop
          >
            {testimonialsSection.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;