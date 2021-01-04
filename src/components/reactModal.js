import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloseIcon from '@material-ui/icons/Close';
import ScrollArea from 'react-scrollbar'

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 500,
    height:'85vh',
    backgroundColor: '#EFF3F0',
    boxShadow: theme.shadows[5],
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      width: '50vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height:'100vh',
      paddingLeft: theme.spacing(7),
    },
  },
  paperComingSoon: {
    width: 500,
    height:'35vh',
    backgroundColor: '#EFF3F0',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down('md')]: {
      width: '50vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
    },
  },
  iconHeader: {
    fontSize: 30,
  },
  tag: {
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
    color: theme.palette.primary.main
  },
  title: {
    marginBottom: theme.spacing(1),
    fontSize: '1.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
    },
  },
  scrollbar: {
    height: "85vh",
    [theme.breakpoints.down('sm')]: {
      height: "100vh"
    },
  },
}));

export default function ReactModal(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.setOpen(false);
  };

  const body = () => {

    const width = '90%'

    if (!props.enable) {
      return (
        <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paperComingSoon}>
          <ListItem>
            <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
            <h2 id="simple-modal-title">#{props.id} - Prochainement ...</h2>
          </ListItem>
          <p id="simple-modal-description">
            Retrouvez prochainement la question #{props.id}.
          </p>
        </Paper>
      )
    } else {
      switch (props.id) {
        case 1:
          // console.log(1);
          return (
            
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} - Y avait-il des cours d'informatique et /ou de développement appliqués au bâtiment dans votre cursus scolaire ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #Formation #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6751828402178682880" height="1206" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
          )
          break

        default:
          console.log('Error');
      }
    }
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body()}
      </Modal>
    </div>
  );
}