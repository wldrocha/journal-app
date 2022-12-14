import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { startLoginWithEmailPassword, startGoogleSignIn } from '../../store'
import { AuthLayout } from '../layout'
import { useForm } from '../../hooks'

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  const dispatch = useDispatch()

  const { status, errorMessage } = useSelector((state) => state.auth)

  const { email, password, onInputChange } = useForm(formData)

  const isAuthenticathing = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(startLoginWithEmailPassword({ email, password }))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
      <form aria-label='submit-form' onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='email'
              type='email'
              placeholder='test@test.com'
              fullWidth
              name='email'
              onChange={onInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='pass'
              type='password'
              placeholder='pass'
              fullWidth
              inputProps={{ 'data-testid': 'password' }}
              name='password'
              onChange={onInputChange}
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth type='submit' disabled={isAuthenticathing}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                aria-label='google-button'
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticathing}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} to='/auth/register'>
              Sign up
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
