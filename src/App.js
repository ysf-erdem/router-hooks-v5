import './App.css'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div><h1>Welcome, select a page from below.</h1>
          <div className="sidebox"> 
            <ul className="space">
              &emsp;&emsp;<Link to="/profile"> <button className="yayay"> Profile </button> </Link>
              &emsp;&emsp;<Link to="/about">   <button className="yayay"> About   </button> </Link>
            </ul>
          </div>
          <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
