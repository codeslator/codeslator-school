import { FC } from "react"
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { SideBar, NavBar } from './';

const Header: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <AppBar position="fixed" component="header">
      <Toolbar>
        <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" alignItems="center">
          <Typography variant="h6" component="div" >
            CodeSchool
          </Typography>
          {matches ? (<NavBar />) : (<SideBar />)}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;