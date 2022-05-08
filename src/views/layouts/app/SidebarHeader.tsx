import { FC } from 'react';
import { Box } from '@mui/material';
import Codeschool from '../../assets/img/logo-color.svg';

export const SidebarHeader: FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img src={Codeschool} alt="codeschool logo" width="100%" />
    </Box>
  );
};
