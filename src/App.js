import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Home } from './Components/Home';
import { Register } from './Components/Register';
import { Feed } from './Components/Feed';
import { Login } from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path = '/register' render={() => <Register />}/>
        <Route exact path = '/feed' render={() => <Feed />}/>
        <Route exact path = '/login' render={() => <Login />}/>
      </Router>
    </div>

  );
}

export default App;
