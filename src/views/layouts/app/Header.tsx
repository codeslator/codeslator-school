import { FC } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  useMediaQuery,
  Box,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  useTheme,
} from '@mui/material';
import { Menu, KeyboardArrowDown } from '@mui/icons-material';
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
          {/* <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <List sx={{ width: '100%', maxWidth: 360, padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <ListItemText primary="John Doe" secondary="Admin" sx={{ textAlign: 'right' }} />
                <ListItemAvatar sx={{ ml: '10px' }}>
                  <Avatar>JD</Avatar>
                </ListItemAvatar>
              </ListItem>
            </List>
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                // edge="end"
                // onClick={handleDrawerToggle}
                // sx={{ mr: 2 }}
              >
                <KeyboardArrowDown />
              </IconButton>
            </Box>
          </Box> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;