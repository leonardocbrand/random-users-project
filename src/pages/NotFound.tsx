import { Box, Divider, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box 
      display={'flex'} 
      alignItems={'center'} 
      justifyContent={'center'} 
      sx={{ backgroundColor: '#f7f6f3' }} 
      height={'100vh'}
    >
      <Typography variant="h2" fontWeight={700} fontSize={35}>404</Typography>
      <Divider orientation="vertical" sx={{ height: '100px', m: '10px' }}/>
      <Typography>Página não encotrada</Typography>
    </Box>
  );
};

export default NotFound;
