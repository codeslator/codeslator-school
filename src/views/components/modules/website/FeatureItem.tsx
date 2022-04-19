import { FC } from 'react';
import { EnhancedEncryption } from '@mui/icons-material';
import { Avatar, Box, Grid, Typography } from '@mui/material';

interface FeatureItemProps {
  title?: string;
  description?: string;
  Icon?: any;
}

const FeatureItem: FC<FeatureItemProps> = ({ title, description, Icon }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar>
            <EnhancedEncryption fontSize="large" />
          </Avatar>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h5">La salud es importante</Typography>
        <Typography variant="body1">
          Sabemos que en estos tiempos la bioseguridad es primordial. Por ello creamos esta plataforma para conectar online a estudiantes y profesores.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FeatureItem;