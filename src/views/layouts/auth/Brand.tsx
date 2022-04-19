import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Image } from 'mui-image';
import Logo from '../../assets/img/logo-2.png'

const Brand: FC = () => {
  return (
    <Box>
      <Typography color="secondary" fontWeight={600} align="center">Welcome to</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Image
          src={Logo}
          alt="logo"
          width="50%"
          easing="linear"
          duration={0}
        />
      </Box>
      <Typography align="center">Lorem ipsum dolor sit amet consectetur</Typography>
    </Box>
  );
};

export default Brand;