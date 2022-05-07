import { FC, useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import { NavLink } from "react-router-dom"
import { Link } from 'react-scroll';
import { sectionNavigation } from './navigation';
import { authNavigation } from '../auth/navigation';

const NavBar: FC = () => {
  // const [match, setMatch] = useState('');
  
  return (
    <>
      <Box>
        {sectionNavigation.map(({ name, to }) => (
          <Link key={to} to={to} smooth spy duration={500} offset={-60}>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ mx: .5 }}
            >
              {name}
            </Button>
          </Link>
        ))}
      </Box>
      <Box>
        {authNavigation.map(({ name, to, Icon }) => (
          <Button
            component={NavLink}
            to={to}
            key={to}
            variant="contained"
            color="secondary"
            // color="inherit"
            sx={{ mx: .5 }}
            endIcon={<Icon />}
          >
            {name}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default NavBar;