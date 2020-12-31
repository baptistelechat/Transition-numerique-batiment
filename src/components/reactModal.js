import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 500,
    height:'85vh',
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
  paperComingSoon: {
    width: 500,
    height:'25vh',
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
}));

export default function ReactModal(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.setOpen(false);
  };

  const body = () => {

    const height = '65%'
    const width = '100%'

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
              <ListItem>
                <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                <h2 id="simple-modal-title">#{props.id} - Text in a modal</h2>
              </ListItem>
              <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6747459356830257152" height={height} width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
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