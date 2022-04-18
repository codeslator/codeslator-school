import { FC } from 'react';
import { Box, Grid, IconButton, Link, Typography } from '@mui/material';
import { Nav } from '../../../interfaces/index';

interface SocialListProps {
  title: string;
  subtitle?: string;
  links: Nav[];
}

export const SocialList: FC<SocialListProps> = ({ title, subtitle, links }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" align="center" color="secondary">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignContent: 'center',
            py: 2
          }}>
          {links.map(({ to, Icon }) => (
            <IconButton
              color="inherit"
              component={Link}
              href={to}
              target="_blank"
              rel="noopener"
            >
              <Icon fontSize="large" />
            </IconButton>
          ))}
        </Box>
      </Grid>
      {subtitle && (
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center" color="white">{subtitle}</Typography>
        </Grid>
      )}
    </Grid>
  );
};
