import { FC } from 'react'
import { Box, CssBaseline } from '@mui/material';

export const Footer: FC = () => {
  return (
    <footer>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: 'secondary.main',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          px: 2,
          py: 3
        }}
      >
        Footer
      </Box>

    </footer>
  )
}
