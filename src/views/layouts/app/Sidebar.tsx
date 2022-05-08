import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  SxProps,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme } from '@mui/material';
import { useUI } from '../../../hooks';
import { SidebarHeader } from './SidebarHeader';
import { teacherNavigation } from './navigation';
import SidebarProfile from './SidebarProfile';

const drawerSX: SxProps<Theme> = (theme) => ({
  '& .MuiDrawer-paper': {
    width: 250,
    overflowY: 'unset',
  },
});

const listItemSX: SxProps<Theme> = (theme) => ({
  borderRight: `3px solid ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.main,
  '&.Mui-selected': {
    backgroundColor: `rgba(251, 86, 7, 0.08)`,
    '&:hover': {
      backgroundColor: `rgba(251, 86, 7, 0.12)`,
    }
  }
});

const Sidebar: FC = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { toggleDrawer, openDrawer } = useUI();

  return (
    <Drawer
      variant={matches ? 'permanent' : 'temporary'}
      open={openDrawer}
      onClose={toggleDrawer}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={drawerSX}
    >
      <Toolbar>
        <SidebarHeader />
      </Toolbar>
      <Divider />
      <SidebarProfile />
      <Divider />
      <List sx={{ py: 0 }}>
        {teacherNavigation.map(({ name, to, Icon }) => (
          <ListItemButton
            component={NavLink}
            to={to}
            selected={pathname === to}
            sx={(pathname === to) ? listItemSX : null}
            key={to}
            onClick={toggleDrawer}
          >
            <ListItemIcon>
              <Icon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={<Typography fontWeight={(pathname === to) ? 700 : 500}>{name}</Typography>} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;