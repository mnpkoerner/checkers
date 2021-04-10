import Home from '../Home/Home.js'
import Spike from '../Spike/Spike'

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router >
    <div className="App">
      <header className="App-header">

        <Route
          exact
          path="/spike">
          <Spike />
        </Route>
        <Route
          exact
          path="/">
          <Home />
        </Route>


      </header>
    </div>
    </Router>
  );
}

export default App;
