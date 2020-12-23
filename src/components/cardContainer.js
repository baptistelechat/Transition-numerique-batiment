import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import ReactModal from './reactModal'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "12vw",
    height: "15vh",
    margin: theme.spacing(2),
    fontSize: 25,
    fontWeight: 'bold',
    color: "white",
    backgroundColor: theme.palette.primary.main
  },
  paperDisable: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "12vw",
    height: "15vh",
    margin: theme.spacing(2),
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.palette.text.disabled,
    backgroundColor: theme.palette.background.default
  },
}));

const CardContainer = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false)
  const [cardId, setCardId] = React.useState(0)
  const [enable, setEnable] = React.useState(false)

  function range(start, end) {
    var enableCard = [];
    for (let i = start; i <= end; i++) {
        enableCard.push(i);
    }
    return enableCard;
  }

  const handlePaperClick = (id) => {
    setOpen(true)
    setCardId(id)
    setEnable(true)
  }

  const handlePaperDisableClick = (id) => {
    setOpen(true)
    setCardId(id)
    setEnable(false)
  }

  const paperList = () => {
    const cards = []
    const nbCard = 44
    const nbCardEnabled = 2

    for (let i = 1; i < nbCard; i++) {
      cards.push(
        range(1,nbCardEnabled).includes(i) ?
        <Paper
          className={classes.paper}
          key={i}
          elevation={3}
          onClick={() => handlePaperClick(i)}>
            #{i}
        </Paper>
        :
        <Paper
        className={classes.paperDisable}
        key={i}
        elevation={3}
        onClick={() => handlePaperDisableClick(i)}>
          #{i}
        </Paper>
      )
    }
    return cards
  }

  return (
    <div className={classes.root}>
      {paperList()}
      <ReactModal open={open} setOpen={setOpen} id={cardId} enable={enable}/>
    </div>
  )
}

export default CardContainer;
