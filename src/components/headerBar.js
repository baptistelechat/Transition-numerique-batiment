import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MyDrawer from './drawer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
}));


const HeaderBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MyDrawer/>
          <Typography variant="h6" className={classes.title}>
            La transition numérique dans le domaine du bâtiment - Baptiste LECHAT
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderBar;
