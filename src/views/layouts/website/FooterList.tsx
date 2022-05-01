import { FC } from 'react'
import { Box, Grid, Link, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Nav } from '../../../interfaces';

interface FooterListProps {
  title?: string;
  links: Nav[];
};

const FooterList: FC<FooterListProps> = ({ title, links }) => {
  return (
    <Grid container spacing={2}>
      {title && (
        <Grid item xs={12}>
          <Typography variant="h6" align="center">{title}</Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        <Box
          component="ul"
          sx={{
            p: 0,
            m: 0,
            listStyle: 'none',
            fontSize: 13,
          }}
        >
          {links.map(({ name, to }) => (
            <Box component="li" textAlign="center" key={uuidv4()}>
              <Link href={to} color="secondary" underline="none">{name}</Link>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default FooterList;