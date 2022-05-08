import { FC } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  useMediaQuery,
  Box,
  useTheme,
  Badge,
} from '@mui/material';
import { Menu, Logout, Notifications } from '@mui/icons-material';
import { useUI } from '../../../hooks';

const Header: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { toggleDrawer } = useUI();

  return (
    <AppBar
      position="fixed"
      color="primary"
      elevation={3}
      sx={{
        width: { sm: `calc(100% - ${200}px)` },
        ml: { sm: `${200}px` },
      }}>
      <Toolbar>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent={matches ? 'flex-end' : 'space-between'}
          alignItems="center"
          width="100%">
          {!matches && (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
              <Menu />
            </IconButton>
          )}
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <IconButton
              color="inherit"
              // edge="end"
              // onClick={handleDrawerToggle}
              sx={{ ml: '5px' }}
            >
              <Badge
                color="secondary"
                badgeContent="1"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              color="inherit"
              // edge="end"
              // onClick={handleDrawerToggle}
              sx={{ ml: '5px' }}
            >
              <Logout />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;