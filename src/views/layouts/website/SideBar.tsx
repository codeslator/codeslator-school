import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import { Divider, Drawer, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Close, Menu } from '@mui/icons-material';
import useUI from '../../../hooks/useUI';
import { sectionNavigation } from './navigation';
import { authNavigation } from '../auth/navigation';

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

const SideBar: FC = () => {
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
          {sectionNavigation.map(({ name, to }) => (
            <ListItem button component={NavLink} to={to} key={name}>
              <ListItemText primary={name} />
            </ListItem>
          ))}
          <Divider />
          {authNavigation.map(({ name, to }) => (
            <ListItem button component={NavLink} to={to} key={name}>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SideBar;