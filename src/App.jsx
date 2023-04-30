import Main from './pages/Main';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      </>
  );
}

export default App;
