import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ReactModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    props.setOpen(false);
  };

  const body = () => {

    const height = 550
    const width = 500

    if (!props.enable) {
      return (
        <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
          <h2 id="simple-modal-title">#{props.id} - Prochainement ...</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      )
    } else {
      switch (props.id) {
        case 1:
          // console.log(1);
          return (
            <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
              <h2 id="simple-modal-title">#{props.id} - Text in a modal</h2>
              <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6747459356830257152" height={height} width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
            </div>
          )
          break

        case 2:
          return (
            <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
              <h2 id="simple-modal-title">#{props.id} - Text in a modal</h2>
              <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6747599064453398528" height={height} width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
            </div>
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