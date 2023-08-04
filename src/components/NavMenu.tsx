import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { CreateUserFormData } from '../pages/Login/schema';

type NavMenuProps = {
  user: CreateUserFormData
}

function NavMenu({ user }: NavMenuProps) {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {user.email ? (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {user.email}
            </Typography>
          ): (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Random Users
            </Typography>
          )}
          <Button onClick={() => navigate('/')} color="inherit">Login</Button>
          <Button onClick={() => navigate('/dashboard')} color="inherit">Dashboard</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavMenu;
