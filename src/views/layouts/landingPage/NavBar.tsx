import { FC } from 'react'
import { Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { NavLink } from "react-router-dom"
import { webRoutes } from '../../../router/routes/webRoutes';
import { authRoutes } from '../../../router/routes/authRoutes';
import { landingPageSections } from '../../../router/routes/landingPageSections';

const useStyles = makeStyles({
  button: {
    marginRight: 10
  }
});

// const getIcon = (name: string) => {
//   switch(name) {
//     case
//   }
// }

export const NavBar: FC = () => {
  const classes = useStyles(); 

  return (
    <Box>
      <Button 
        component={NavLink}
        to={webRoutes[0].to}
        variant="outlined"
        color="inherit"
        className={classes.button}
      >
        {webRoutes[0].name}
      </Button>
      {landingPageSections.map(({ name, to }) => (
        <Button
          component="a"
          href={to}
          key={to}
          variant="outlined"
          color="inherit"
          className={classes.button}
        >
          {name}
        </Button>
      ))}
      {authRoutes.map(({ name, to }) => (
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
  )
}
