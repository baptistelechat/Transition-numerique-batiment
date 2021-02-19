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
  ListItem: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '7vh',
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

    const width = '87%'

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
                  <ListItem className={classes.ListItem}>
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
        
        case 2:
          return (
            <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
              <ScrollArea className={classes.scrollbar}>
                <ListItem className={classes.ListItem}>
                  <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                  <h2 id="simple-modal-title" className={classes.title}>#{props.id} - Avez-vous déjà réalisé une formation en rapport avec le numérique ou sur la digitalisation de votre métier dans votre entreprise (logiciels, nouveaux concepts, nouvelles pratiques, …) ?</h2>
                </ListItem>
                <p id="simple-modal-description" className={classes.tag}>
                #Bâtiment #Numérique #Formation #Ynov
                </p>
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6752477157106167808" height="1168" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
              </ScrollArea>
            </Paper>
          )

        case 3:
          return (
            <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
              <ScrollArea className={classes.scrollbar}>
                <ListItem className={classes.ListItem}>
                  <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                  <h2 id="simple-modal-title" className={classes.title}>#{props.id} - Recevez-vous encore beaucoup de plans dessinés à la main ?</h2>
                </ListItem>
                <p id="simple-modal-description" className={classes.tag}>
                #Bâtiment #Numérique #Ynov
                </p>
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6753248299760807936" height="1171" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
              </ScrollArea>
            </Paper>
          )
  
          case 4:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} - Réalisez-vous encore des plans à la main (schéma / croquis, détails, plans de principe, plans d’exécution, ...) ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6754281899218214912" height="1152" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

          case 5:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} - Comment recevez-vous le plus souvent les pièces écrites et / ou graphiques de vos projets de construction ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #Partage #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6755003752144482304" height="1152" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

            case 6:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} - Pensez-vous qu’aujourd’hui la réalisation de plans sur ordinateur (CAO / DAO) a simplifié votre travail au quotidien ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6755729262864551936" height="1152" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

            case 7:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} - Pensez-vous qu’aujourd’hui la réalisation de plans sur ordinateur (CAO / DAO) a simplifié votre travail au quotidien ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6756824862603390976" height="1133" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

            case 8:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} - Constatez-vous une augmentation de l’utilisation d’ordinateurs portables, de tablettes tactiles ou de smartphones sur les chantiers ou lors de réunion de travail ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #Chantier #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6757547594571894784" height="1114" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

            case 9:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Pour vous, l'arrivée des nouvelles technologies apportera principalement aux entreprises du BTP :</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6758271979503013889" height="1171" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

            case 10:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Avez-vous déjà entendu parler du BIM ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #BIM #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6759363451086237696" height="1190" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )
            
            case 11:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Utilisez-vous le BIM dans votre entreprise ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #BIM #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6760082066915819520" height="1152" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )
            
            case 12:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Qu’est-ce que c’est le BIM pour vous ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #BIM #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6760806371328851968" height="1133" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )
            
            case 13:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Le BIM, c'est pour :</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #BIM #Construction #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6761897933223800832" height="1152" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

            case 14:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Pensez-vous que se lancer dans le BIM aujourd'hui est une bonne idée ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #BIM #Entreprise #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6762619196795830272" height="1133" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )
            
            case 15:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Pour vous, votre entreprise est-elle en avance dans le lancement du BIM ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #BIM #Entreprise #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6763340536293163008" height="1133" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

            case 16:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Si vous participez à un projet BIM, comment qualifieriez-vous votre contribution ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #BIM #Entreprise #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6764433656552407040" height="1171" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

            case 17:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Pour vous, à quels niveaux de maturité doit être utilisé le BIM ?</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #BIM #Entreprise #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6765152683897716736" height="1171" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

            case 18:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Le BIM est utile sur :</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #BIM #Entreprise #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6765882771945598976" height="1171" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

            case 19:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Le BIM, ça coûte cher à mettre en place.</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #BIM #Construction #Ynov 
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6766972758418055168" height="1114" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

            case 20:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Il faut des ordinateurs très puissants pour faire du BIM.</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #BIM #Construction #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6767694672539213824" height="1114" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

            case 21:
            return (
              <Paper style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.paper}>
                <ScrollArea className={classes.scrollbar}>
                  <ListItem className={classes.ListItem}>
                    <ListItemIcon><CloseIcon onClick={handleClose} className={classes.iconHeader}/></ListItemIcon>
                    <h2 id="simple-modal-title" className={classes.title}>#{props.id} -  Les bâtiments devront tous être numérisés pour faire des réhabilitations BIM.</h2>
                  </ListItem>
                  <p id="simple-modal-description" className={classes.tag}>
                  #Bâtiment #Numérique #BIM #Construction #Ynov
                  </p>
                  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6768419677703020544" height="1133" width={width} frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
                </ScrollArea>
              </Paper>
            )

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