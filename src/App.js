// import Navigation from '../src/Navigation/Navigation';
import { Switch, Route, Redirect, Link  } from 'react-router-dom';
import SignUp from '../src/SingUp/SingUp';
import SingIn from '../src/SignIn/SignIn';
import ContactForm from '../src/ContactForm/ContactForm'
import React, { Component } from 'react';
import PrivateRoute from '../src/PrivateRoute';
// import ContactForm from '../src/ContactForm/ContactForm';

function App() {
  return (
<>
      <Link to="/contactform">PB</Link>
      <Switch>
      <Route path="/" exact>
          <SignUp />
      </Route>
      <Route path="/singin" exact>
        <SingIn />
        {/* <ContactForm path="/contactform" /> */}
       </Route>
      <PrivateRoute>
        <ContactForm path="/contactform" redirectTo="/"/>
      </PrivateRoute>
          
    </Switch>
    </>
  );
}

export default App;
