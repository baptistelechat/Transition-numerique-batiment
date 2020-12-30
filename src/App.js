import HeaderBar from './components/headerBar'
import CardContainer from './components/cardContainer'
import { Helmet } from 'react-helmet';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#34A1BF',
    },
    secondary: {
      main: '#F0C933',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Transition numérique du bâtiment</title>
      </Helmet>
      <HeaderBar/>
      <CardContainer/>
    </ThemeProvider>
  );
}

export default App;
