import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={About} />
        <Route exact path="/projetos" component={Projects} />
        <Route exact path="/contato" component={Contact} />
      </Switch>
      </>
  );
}

export default App;
