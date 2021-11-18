import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './pages/partials/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About} exact/>
          <Route path='/product' component={Product} exact/>
          <Route path='/contact' component={Contact} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/registration' component={Registration} exact/>
          <Route path='/dashboard' component={Dashboard} exact/>
          
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
