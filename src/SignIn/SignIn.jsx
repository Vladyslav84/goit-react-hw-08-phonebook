import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import aut_operation from '../redux/slices/authentication/aut_operation';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory  } from 'react-router-dom';
import authSelectors from '../redux/slices/authentication/auth-selectors';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

    const handleSubmit = evt => {
         evt.preventDefault();
console.log(evt.target.elements.email.value)
                dispatch(aut_operation.logIn({
                  email: evt.target.elements.email.value,
                  password: evt.target.elements.password.value,
            }))
        // history.push({pathname:"/contacts"})
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
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>

      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}