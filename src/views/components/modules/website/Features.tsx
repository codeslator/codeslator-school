import { FC } from 'react';
import { Box, Container, Grid } from '@mui/material';
import FeatureItem from './FeatureItem';
import { featuresSection } from './data';

const Features: FC = () => {
  return (
    <Box component="section" id="#features" sx={{ mb: 5 }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={2}>
          {featuresSection.map(({ title, description, Icon }) => (
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={title}>
              <FeatureItem title={title} description={description} icon={Icon} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;