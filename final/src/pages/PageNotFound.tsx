import { Box, Typography } from '@mui/material';

const PageNotFound = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh"
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h6">
        Page not found
      </Typography>
    </Box>
  );
};

export default PageNotFound;
