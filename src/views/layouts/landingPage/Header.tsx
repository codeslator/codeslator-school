import { FC } from "react"
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import { defaultTheme } from "../../assets/themes";

export const Header: FC = () => {
  const matches = useMediaQuery(defaultTheme.breakpoints.up('md'));

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" alignItems="center">
            <Typography variant="h6" component="div" >
              CodeSchool
            </Typography>
            {matches ? (<NavBar />) : (<SideBar />)}
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};
