import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../../assets/img/logo-color.svg';

const Brand: FC = () => {
  return (
    <Box>
      <Typography color="secondary" fontWeight={600} align="center">Welcome to</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <img
          src={Logo}
          alt="logo"
          width="100%"
        />
      </Box>
      <Typography align="center">Lorem ipsum dolor sit amet consectetur</Typography>
    </Box>
  );
};

export default Brand;