import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import aut_operation from '../redux/slices/authentication/aut_operation';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../redux/slices/authentication/auth-selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBarMenu() {

    const userName = useSelector(authSelectors.getUsername);
    const classes = useStyles();
    const dispatch = useDispatch();

     const LogOut = () => {
        dispatch(aut_operation.logOut());
    }
return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ${userName}`s pnone book
          </Typography>
          <Button color="inherit" onClick={LogOut} >Log out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};