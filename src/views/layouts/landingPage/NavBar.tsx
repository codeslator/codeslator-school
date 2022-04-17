import { FC } from 'react'
import { Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { NavLink } from "react-router-dom"
import { sectionNavigation, authNavigation } from './';

const useStyles = makeStyles({
  button: {
    marginRight: 10
  }
});

export const NavBar: FC = () => {
  const classes = useStyles(); 

  return (
    <>
      <Box>
        {sectionNavigation.map(({ name, to }) => (
          <Button
            component={NavLink}
            to={to}
            key={to}
            variant="outlined"
            color="inherit"
            className={classes.button}
          >
            {name}
          </Button>
        ))}
      </Box>
      <Box>
        {authNavigation.map(({ name, to }) => (
          <Button
            component={NavLink}
            to={to}
            key={to}
            variant="outlined"
            color="inherit"
            className={classes.button}
          >
            {name}
          </Button>
        ))}
      </Box>
    </>
  )
}
