import { FC } from 'react'
import {
  Box,
  Container,
  Divider,
  Grid,
} from '@mui/material';
import { footerSection, socialLinks } from './index';
import { SocialList } from './SocialList';
import { FooterList } from './FooterList';
import { Copyright } from './Copyright';

export const Footer: FC = () => {

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#424242',
        color: '#fff',
        bottom: 0,
        width: '100%',
        px: 2,
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl" sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FooterList title="Some links goes here." links={footerSection} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <SocialList title="Maybe social media here" subtitle="Hello world" links={socialLinks} />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FooterList title="Some links goes here." links={footerSection} />
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ borderColor: '#fff' }} />
      <Copyright />
    </Box>
  );
};
