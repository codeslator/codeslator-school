import { MailOutline } from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';
import { FC } from 'react'
import ContactForm from './ContactForm';

const Contact: FC = () => {
  return (
    <Box
      component="section"
      id="#contact"
      sx={{
        mt: 5,
        background: 'linear-gradient(180deg, #fff 80%, #424242 20%)',
        pb: 4
      }}
    >
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h5" color="primary" fontWeight={700}>Get In Touch</Typography>
            <Typography sx={{ mb: 3 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eveniet corporis, earum ab accusantium rerum laudantium non? Placeat, blanditiis maiores.</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, alignItems: 'center' }}>
              <MailOutline color="primary" fontSize="large" sx={{ mr: 1 }} />
              <Typography>mail@mail.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, alignItems: 'center' }}>
              <MailOutline color="primary" fontSize="large" sx={{ mr: 1 }} />
              <Typography>mail@mail.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, alignItems: 'center' }}>
              <MailOutline color="primary" fontSize="large" sx={{ mr: 1 }} />
              <Typography>mail@mail.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;