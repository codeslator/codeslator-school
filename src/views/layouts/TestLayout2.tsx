import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material"
import { FC } from "react"
import { Outlet } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import { switchPaletteMode } from '../assets/themes/index';

export const TestLayout2: FC = () => {
  return (
    <Box>
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="primary" variant="contained" onClick={() => switchPaletteMode('dark')}>Login</Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  )
}
