import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import {Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import AWSLogin from "./pages/AWSLogin";
import('preline')

Amplify.configure(awsconfig);
Auth.configure(awsconfig);


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

            <Route path="/awslogin" >
              <AWSLogin />
            </Route>

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
