import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import YnovBlack from '../image/ynov/ynov_black.png'
import Pop from '../image/Pop_Baptiste.png'


const useStyles = makeStyles((theme) => ({
  list: {
    width: '25vw',
    height: '100vh',
    backgroundColor: '#EFF3F0',
    [theme.breakpoints.down('md')]: {
      width: '50vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '75vw',
    },
  },
  title: {
    color: theme.palette.common.white
  },
  iconHeader: {
    fontSize: 40,
    color: theme.palette.common.white
  },
  ListItemHeader: {
    backgroundColor: theme.palette.primary.main
  },
  text: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    textAlign: "justify",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  fontAwesomeIcon: {
    fontSize: '48px',
    padding: theme.spacing(2),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  iconContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  ynov: {
    height:'75px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  pop: {
    height: '40px',
    borderRadius: '50%',
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(4),
    },
  }
}));

const MyDrawer = () => {

  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  const urlLinkedin = 'https://www.linkedin.com/in/baptiste-lechat-3686a6174/'
  const urlGithub = 'https://github.com/baptistelechat'
  const urlMail = 'mailto:baptistelechat@outlook.fr'
  const urlMessenger = 'https://m.me/baptistelechat72'
  const urlYnov = 'https://www.ynov.com/formation/ynov-masteres/expert-developpement-mobile-iot/'

  const openLink = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  
  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ListItem className={classes.ListItemHeader}>
        <ListItemIcon><MenuIcon className={classes.iconHeader}/></ListItemIcon>
        <h2 className={classes.title}>La transition numérique dans le domaine du bâtiment</h2>
      </ListItem>
      <p className={classes.text}>Dans le cadre de ma formation en Mastère "Expert en Développement Logiciel, Mobile & IoT" au sein du Ynov Campus de Nantes, je vous propose de répondre à plusieurs questions sur la thématique que je souhaite développer dans mon mémoire de fin de formation : La transition numérique dans le domaine du bâtiment : les évolutions, son impact et l’avenir du monde de la construction.</p>
      <Divider />
      <div className={classes.iconContainer}>
        <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faLinkedin} onClick={() => openLink(urlLinkedin)}/>
        <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faGithub} onClick={() => openLink(urlGithub)}/>
        <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faEnvelope} onClick={() => openLink(urlMail)}/>
        <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faFacebookMessenger} onClick={() => openLink(urlMessenger)}/>
        <ListItem>
          <img src={Pop} alt="Pop Baptiste" className={classes.pop}/>
          <p style={{fontWeight: 'bold'}}>Baptiste LECHAT - M2 LMIOT</p>
        </ListItem>
      </div>
      <div className={classes.iconContainer}>
        <img src={YnovBlack} alt="logo Ynov" className={classes.ynov} onClick={() => openLink(urlYnov)}/>
      </div>
    </div>
  );


  return (
    <div>
      <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
          <MenuIcon />
      </IconButton>
      <Drawer anchor={'left'} open={openDrawer} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

export default MyDrawer;
