import HeaderBar from './components/headerBar'
import CardContainer from './components/cardContainer'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Transition numérique du bâtiment</title>
      </Helmet>
      <HeaderBar/>
      <CardContainer/>
    </div>
  );
}

export default App;
