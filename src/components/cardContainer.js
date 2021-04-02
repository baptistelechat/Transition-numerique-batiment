import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import ReactModal from './reactModal'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    backgroundColor: '#EFF3F0'
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // width: "12vw",
    width: '12vw',
    height: "15vh",
    margin: theme.spacing(2),
    fontSize: 25,
    fontWeight: 'bold',
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('md')]: {
      width: '24vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '36vw',
    },
  },
  paperDisable: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // width: "12vw",
    width: '12vw',
    height: "15vh",
    margin: theme.spacing(2),
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.palette.text.disabled,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
      width: '24vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '36vw',
    },
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
    const nbCard = 43
    const nbCardEnabled = 39
    for (let i = 1; i <= nbCard; i++) {
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
