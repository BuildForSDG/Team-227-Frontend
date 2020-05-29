import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import {
  Grid,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link as LinkReload,
  Paper,
  Box,
  Typography,
  CircularProgress
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Fade from 'react-reveal/Fade';
import pic1 from '../../assets/a1.jpg';
import pic2 from '../../assets/a2.jpg';
import pic3 from '../../assets/a3.png';
import ToastMessage from '../Toasts/ToastMessage.jsx';

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
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },

  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  link: {
    textDecoration: 'none',
    color: '#3f51b5',
    fontSize: '0.875rem',
    fontWeight: 400,
    '&:hover': {
      textDecoration: 'underline'
    },
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  linkBottom: {
    color: 'rgba(0, 0, 0, 0.57)',
    marginTop: '40px',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

const Login = ({
  isAuth, loading, error, onSubmitForm
}) => {
  const classes = useStyles();

  const Copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link className={classes.linkBottom} to="https://buildforsdg.andela.com">
        #BuildForSDG2020 Facebook Andela
      </Link>{' '}
      <br />
      {'Copyright '} &copy; {new Date().getFullYear()}
      {'.'}
    </Typography>
  );

  /**
   * SUBMIT FORM FOR AUTHENTICATED USER
   * @func
   * @param {Event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      phoneNumber: e.target[0].value.trim(),
      password: e.target[2].value.trim()
    };
    const even = e.target;
    if (!isAuth) {
      onSubmitForm(data, even);
    }
  };

  const clearMessage = () => {
    delete error.message;
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {error.message && <ToastMessage type="error" message={error.message} clearMessage={clearMessage} />}
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
              <div className={classes.wrapper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
              </div>
              <Grid item xs>
                <LinkReload href="#" variant="body2">
                  Forgot password?
                </LinkReload>
              </Grid>
              <Grid item>
                <Link to="/sign-up" className={classes.link}>
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
