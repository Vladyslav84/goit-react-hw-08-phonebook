import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import aut_operation from '../redux/slices/authentication/aut_operation';
import { Redirect, useHistory  } from 'react-router-dom';
// import authSelectors from '../../redux/slices/authentication/auth-selectors';

// console.log(authSelectors)

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
   const history = useHistory();
    const classes = useStyles();
    const emailId = uuidv4();
    const nameId = uuidv4();
  const passwordId = uuidv4();
  const dispatch = useDispatch();
  
  const handleSubmit = evt => {
         evt.preventDefault();
// console.log(evt.target.elements.firstName.value)
                dispatch(aut_operation.register({
                name: evt.target.elements.firstName.value,
                  email: evt.target.elements.email.value,
                password: evt.target.elements.password.value,
            }))
      //  history.push({pathname:"/contacts"})
        // if (allContacts.some(contact => contact.name === evt.target.elements.inputName.value))
        // {
        //     alert(`${ evt.target.elements.inputName.value } is already in contacts`)
        // } else
        // {
        //     dispatch(operations.postContacts({
        //         name: evt.target.elements.inputName.value,
        //         number: evt.target.elements.inputNumber.value,
        //     }))
        // };
        evt.target.reset();
    };
    
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate  onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id={nameId}
                label="Name"
                name="firstName"
                autoFocus
              />
            </Grid>
             <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id={emailId}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid> 
             <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id={passwordId}
                autoComplete="current-password"
              />
            </Grid> 

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/singin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
