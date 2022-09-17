import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path={'/'} exact>
            <Landing />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
