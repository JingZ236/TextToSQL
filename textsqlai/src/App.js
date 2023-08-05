import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import('preline')


function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/dashboard" >
              <Dashboard />
            </Route>

            <Route path="/account" >
              <Account />
            </Route>

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
