import { Box, Divider, Drawer, SxProps, Theme, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react'
import { useUI } from '../../../hooks';
import { SidebarHeader } from './SidebarHeader';

const drawerSX: SxProps<Theme> = (theme) => ({
  '& .MuiDrawer-paper': {
    width: 200,
    MaxHeight: '100%',
    overflowY: 'unset',
    boxSizing: 'border-box',
    // backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

const Sidebar: FC = () => {
  const theme = useTheme();
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
      <Box>
        <Toolbar>
          <SidebarHeader />
        </Toolbar>
        <Divider />
        {/* <PerfectScrollbar> */}
          {/* {routes.map(({ name, to, Icon }) => (
            <SidebarListItemButton
              key={to}
              component={NavLink}
              text={name}
              to={to}
              icon={<Icon />}
              selected={pathname === to}
            />
          ))} */}
        {/* </PerfectScrollbar> */}
      </Box>
      <Box>
        {/* <List>
          <SidebarListItemButton text="Log Out" icon={<Logout />} onClick={logOut} />
        </List>
        <Divider />
        <SidebarFooter /> */}
      </Box>
    </Drawer>
  );
};

export default Sidebar;