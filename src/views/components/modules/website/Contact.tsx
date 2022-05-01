import { FC } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import ContactForm from './ContactForm';
import { contactSection } from './data';

const Contact: FC = () => {
  const { title, description, contacts } = contactSection;
  return (
    <Box
      component="section"
      id="#contact"
      sx={{
        mt: 5,
        background: 'linear-gradient(180deg, #fff 70%, #424242 30%)',
        pb: 4
      }}
    >
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h5" color="primary" fontWeight={700}>{title}</Typography>
            <Typography sx={{ mb: 3 }}>{description}</Typography>
            {contacts.map(({ data, Icon }) => (
              <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, alignItems: 'center' }}>
                <Icon color="secondary" fontSize="large" sx={{ mr: 1 }} />
                <Typography>{data}</Typography>
              </Box>
            ))}
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