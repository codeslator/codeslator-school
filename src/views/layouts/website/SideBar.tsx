import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Close, Menu } from '@mui/icons-material';
import { Link } from 'react-scroll';
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
  const [match, setMatch] = useState('');

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
          {sectionNavigation.map(({ name, to, Icon }) => (
            <Link key={to} to={to} smooth spy duration={500} offset={-60} onSetActive={(route) => setMatch(route)}>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem> 
            </Link>
          ))}
          <Divider />
          {authNavigation.map(({ name, to, Icon }) => (
            <ListItem button component={NavLink} to={to} key={name}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SideBar;