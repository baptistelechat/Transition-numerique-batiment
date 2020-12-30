import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

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
  fontAwesomeIcon: {
    fontSize: '24px',
    padding: theme.spacing(2),
    // [theme.breakpoints.down('md')]: {
    //   display: 'none',
    // },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
   },
  },
}));


const HeaderBar = () => {
  const classes = useStyles();

  const urlLinkedin = 'https://www.linkedin.com/in/baptiste-lechat-3686a6174/'
  const urlGithub = 'https://github.com/baptistelechat'
  const urlMail = 'mailto:baptistelechat@outlook.fr'
  const urlMessenger = 'https://m.me/baptistelechat72'

  const openLink = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MyDrawer/>
          <Typography variant="h6" className={classes.title}>
            La transition numérique dans le domaine du bâtiment - Baptiste LECHAT
          </Typography>
          <div className={classes.iconContainer}>
            <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faLinkedin} onClick={() => openLink(urlLinkedin)}/>
            <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faGithub} onClick={() => openLink(urlGithub)}/>
            <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faEnvelope} onClick={() => openLink(urlMail)}/>
            <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faFacebookMessenger} onClick={() => openLink(urlMessenger)}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderBar;
