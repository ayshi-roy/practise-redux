import logo from './logo.svg';
import './App.css';
import Form from './Componant/Form/Form';
import List from './Componant/Form/List/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componant/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/list">
            <List></List>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
