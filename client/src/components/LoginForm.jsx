import React from "react";
import { Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle sign in');
  };
  return (
    <>
      <Grid
        container
        position='absolute'
        top={0}
        left={0}
        height='100%'
        width='100%'
        alignItems =' center'
        justifyContent='center'
        >
        <CssBaseline/>
        <Box item xs='auto'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component='h1' variant='h5'>
                Авторизация
            </Typography>
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Ваш Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Ваш пароль"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Войти
                </Button>
            </Box>
        </Box>
      </Grid>
    </>
  );
};

export default LoginForm;
