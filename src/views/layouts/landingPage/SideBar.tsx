import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import { Divider, Drawer, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Close, Menu } from '@mui/icons-material';
import useUI from '../../../hooks/useUI';
import { webRoutes } from '../../../router/routes/webRoutes';
import { authRoutes } from '../../../router/routes/authRoutes';
import { landingPageSections } from '../../../router/routes/landingPageSections';

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

export const SideBar: FC = () => {
  const classes = useStyles();
  const { openDrawer, toggleDrawer } = useUI();

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer}
      >
        <List className={classes.root}>
          <ListItem>
            <ListItemText primary="Close" />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                onClick={toggleDrawer}
              >
                <Close />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button component={NavLink} to={webRoutes[0].to}>
            <ListItemText primary={webRoutes[0].name} />
          </ListItem>
          {landingPageSections.map(({ name, to }) => (
            <ListItem button component="a" href={to} key={name}>
              <ListItemText primary={name} />
            </ListItem>
          ))}
          {authRoutes.map(({ name, to }) => (
            <ListItem button component={NavLink} to={to} key={name}>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
