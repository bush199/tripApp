import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from './components/home/Home'
import Contact from './components/contactus/Contact';
import Login from './components/login/Login';
import TripPakages from './components/trippakages/TripPakages'
import Register from './components/register/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img className="logo-img" src="tour.jpg" height="60px" width="80px" alt="" /> <br/> 

          <Link className="navbar-brand" to="/home">
          Tour 2 Townie's
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trippakages">
                  Trip Pakages
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item ml-auto">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contactus" component={Contact} />
          <Route path="/trippakages" component={TripPakages} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
