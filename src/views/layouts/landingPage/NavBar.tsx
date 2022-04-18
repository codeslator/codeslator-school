import { FC } from 'react'
import { Box, Button } from '@mui/material'
import { NavLink } from "react-router-dom"
import { sectionNavigation, authNavigation } from './';

export const NavBar: FC = () => {

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
            sx={{ mx: .5 }}
          >
            {name}
          </Button>
        ))}
      </Box>
      <Box>
        {authNavigation.map(({ name, to, Icon }) => (
          <Button
            component={NavLink}
            to={to}
            key={to}
            variant="outlined"
            color="inherit"
            sx={{ mx: .5 }}
            endIcon={<Icon />}
          >
            {name}
          </Button>
        ))}
      </Box>
    </>
  )
}
