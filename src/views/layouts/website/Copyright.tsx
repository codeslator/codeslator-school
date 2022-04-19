import { Box, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1" align="center">© Copyright - www.codeslator.io - {new Date().getFullYear()}</Typography>
    </Box>
  );
};

export default Copyright;