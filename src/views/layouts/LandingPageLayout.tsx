import { FC } from 'react'
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './website'

const LandingPageLayout: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main>
        <Container maxWidth="xl" sx={{ py: 2 }}>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </Box>
  );
};

export default LandingPageLayout;
