import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Paper, Container, Typography, TextField, Button, Stack } from '@mui/material';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const createUserFormSchema = z.object({
  name: z.string()
    .nonempty('O nome é obrigatório')
    .transform(name => {
      return name.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1));
      }).join(' ');
    }),
  email: z.string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase(),
  password: z.string()
    .min(6, 'A senha precisa de no mínimo 6 caracteres'),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>

const Login = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const createUser = (data: any) => {
    setUser(JSON.stringify(data, null, 2));
    navigate('/dashboard');
  };

  return (
    <Stack component='main' display='flex' alignItems='center' justifyContent='center' height='100vh'>
      <Paper
        component="form"
        elevation={ 8 }
        onSubmit={handleSubmit(createUser)}
        sx={ {
          borderRadius: '20px',
          borderBottom: '1px solid ##CED4DA',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '50px',
        } }
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
        {errors.name && <span>{errors.name.message}</span>}
        <TextField
          label="Email"
          autoComplete="off"
          type="email"
          variant="filled"
          margin='normal'
          size='small'
          {...register('email')}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <TextField
          label="Senha"
          type="password"
          autoComplete="current-password"
          variant="filled"
          margin='normal'
          size='small'
          {...register('password')}
        />
        {errors.password && <span>{errors.password.message}</span>}
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
      <span>{user}</span>
    </Stack>
  );
};

export default Login;
