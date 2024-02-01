import React from 'react';
// import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import PrivateRoute from './privateRoute';
import AddList from './components/AddList';
import GetList from './components/GetList';
import { AuthProvider } from './auth';
function App() {
  return (
    <Router>
      <AuthProvider>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup'component={SignUp} />
      <Route exact path='/signin'component={SignIn} />
      <PrivateRoute path='/addlist' component={AddList} />
      <PrivateRoute path='/getlist' component={GetList} />
      </Switch>
      </AuthProvider>
    </Router>
  );
}
export default App;

