import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  list: {
    width: '25vw',
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
    textAlign: "justify"
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
      <p className={classes.text}>📖 Dans le cadre de ma formation en Mastère "Expert en Développement Logiciel, Mobile & IoT" au sein du Ynov Campus 👨‍💻 de Nantes, je vous propose de répondre à plusieurs questions sur la thématique que je souhaite développer dans mon mémoire de fin de formation : La transition numérique dans le domaine du bâtiment : les évolutions, son impact et l’avenir du monde de la construction.</p>
      <Divider />
      <p className={classes.text}>Baptiste LECHAT</p>
      
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
