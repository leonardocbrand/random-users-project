import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavMenu: FC = () => {
  const navgate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Random Users
          </Typography>
          <Button onClick={() => navgate('/')} color="inherit">Login</Button>
          <Button onClick={() => navgate('/dashboard')} color="inherit">Dashboard</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavMenu;
