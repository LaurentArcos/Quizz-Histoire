import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FinalScreen from './pages/FinalScreen';
import Questions from './pages/Questions';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Settings/>
        </Route>
        <Route path="/questions">
          <Questions/>
        </Route>
        <Route path="/score">
          <FinalScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
