import { FC } from 'react';
import { Box, Container, Grid } from '@mui/material';
import FeatureItem from './FeatureItem';

const Features: FC = () => {
  return (
    <Box component="section" id="#features">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <FeatureItem />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;