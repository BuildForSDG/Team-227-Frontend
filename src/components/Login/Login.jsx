import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Fade from 'react-reveal/Fade';
import pic1 from '../../assets/a1.jpg';
import pic2 from '../../assets/a2.jpg';
import pic3 from '../../assets/a3.png';
import ErrorMessage from '../Toasts/ErrorMessage.jsx';

const pictures = [pic1, pic2, pic3];

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: `url(${pictures[Math.floor(Math.random() * 3)]})`, // Select pic randomly
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#022140'
  },
  form: {
    width: '100%', // Fix IE 11 issue
    marginTop: theme.spacing(1),
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    <Link color="inherit" href="https://buildforsdg.andela.com">
      #BuildForSDG2020 Facebook Andela
    </Link>{' '}
    <br />
    {'Copyright '} &copy; {new Date().getFullYear()}
    {'.'}
  </Typography>
);

const Login = ({
  isAuth, loading, error, onSubmitForm
}) => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      phoneNumber: e.target[0].value,
      password: e.target[1].value
    };
    if (!isAuth) {
      onSubmitForm(data);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {error.message && <ErrorMessage error={error.message} />}
        <Fade bottom>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={(e) => handleSubmit(e)}>
              <TextField
                maring="normal"
                required
                fullWidth
                id="phone_number"
                label="Phone Number"
                name="phone_number"
                autoComplete="tel"
                autoFocus
                variant="outlined"
              />
              <TextField
                variant="outlined"
                maring="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
              />
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              <Button type="submit" fullWidth variant="contained" disabled={loading} color="primary" className={classes.submit}>
                Sign In
              </Button>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account ? Sign Up"}
                </Link>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Fade>
      </Grid>
    </Grid>
  );
};

Login.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  onSubmitForm: PropTypes.func.isRequired
};

export default Login;
