import { FC } from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';

interface FeatureItemProps {
  title: string;
  description: string;
  icon?: any;
}

const FeatureItem: FC<FeatureItemProps> = ({ title, description, icon: Icon }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} sm={2} md={4} lg={3}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar
            sx={{
              p: 5,
              bgcolor: 'tertary.main',
              borderRadius: '15px'
            }}
            variant="rounded"
          >
            <Icon fontSize="large" />
          </Avatar>
        </Box>
      </Grid>
      <Grid item xs={9} sm={10} md={8} lg={9}>
        <Typography variant="h6" fontWeight={600}>{title}</Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FeatureItem;