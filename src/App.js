import React from 'react';
import { useContext } from 'react';
// import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthContext from './store/auth-context';
import LandingPage from './components/landingpage/landingPage';
import AuthForm from './components/auth/Authform';
import Home from './xpense/home';


const App = () => {
  const authCtx = useContext(AuthContext);
  return (
      //  <div>
      //    <LandingPage />
      //  </div>
     
      <Router>
        <Switch>
        <Route exact path="/" component={LandingPage} />
        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
            <AuthForm />
          </Route>
        )}
        {!authCtx.isLoggedIn && (
          <Route path='/home'>
            <Home />
          </Route>
        )}
        {/* <Route
          path="/auth"
          component={AuthForm}
        /> */}

        </Switch>

      </Router>


  );
};

export default App;
