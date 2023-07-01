import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Paper, Container, Typography, TextField, Button } from '@mui/material';

import ErrorMsg from './components/ErrorMsg';

import { zodResolver } from '@hookform/resolvers/zod';

import { CreateUserFormData, createUserFormSchema } from './schema';
import style from './style';

const Login = () => {
  const [user, setUser] = useState<CreateUserFormData>({} as CreateUserFormData);

  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const createUser = (data: CreateUserFormData ) => {
    setUser(data);
    toast.success('Login successful');
    navigate('/dashboard');
  };

  return (
    <Container 
      component='main' 
      sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Paper
        component="form"
        elevation={ 8 }
        onSubmit={handleSubmit(createUser)}
        sx={ style.form }
      >
        <Container component="header" sx={ { margin: '0px 0 34px 0px ' } }>
          <Typography variant="h1" fontSize={ 24 } fontWeight={ 700 }>
              Faça seu login 
            {' '}
            <span></span>
          </Typography>
        </Container>
        <TextField
          label="Nome"
          autoComplete="off"
          type="text"
          variant="filled"
          margin='normal'
          size='small'
          {...register('name')}
        />
        <ErrorMsg errorState={errors.name} />
        <TextField
          label="Email"
          autoComplete="off"
          type="email"
          variant="filled"
          margin='normal'
          size='small'
          {...register('email')}
        />
        <ErrorMsg errorState={errors.email} />
        <TextField
          label="Senha"
          type="password"
          autoComplete="current-password"
          variant="filled"
          margin='normal'
          size='small'
          {...register('password')}
        />
        <ErrorMsg errorState={errors.password} />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          size='large'
          sx={{ mt: 4 }}
        >
              Continuar
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
