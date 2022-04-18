import { FC } from "react"
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";

export const Header: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppBar position="static" component="header">
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
