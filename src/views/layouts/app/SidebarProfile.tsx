import { Avatar, Badge, Box, Button, Paper, Typography } from '@mui/material';
import { FC } from 'react'

const SidebarProfile: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 2
      }}
    >
      <Badge
        color="success"
        overlap="circular"
        badgeContent=""
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Avatar
          component={Paper}
          alt="Avatar"
          src="https://api.lorem.space/image/face?w=150&h=150&hash=A89D0DE6"
          sx={{
            width: 100,
            height: 100,
            mb: 1
          }}
          elevation={5}
        />
      </Badge>
      <Typography variant="subtitle1" fontWeight={700}>John Doe</Typography>
      <Typography variant="caption">Web Developer</Typography>
      <Button
        variant="contained"
        color="secondary"
        size="small"
      >
        View Profile
      </Button>
    </Box>
  );
};

export default SidebarProfile;