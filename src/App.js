// import Navigation from '../src/Navigation/Navigation';
import { Switch, Route, Redirect, Link  } from 'react-router-dom';
import SignUp from '../src/SingUp/SingUp';
import SingIn from '../src/SignIn/SignIn';
import ContactForm from '../src/ContactForm/ContactForm'
import React, { Component, Suspense } from 'react';
import PrivateRoute from '../src/PrivateRoute';
// import ContactForm from '../src/ContactForm/ContactForm';

function App() {
  return (
<>
      {/* <Link to="/contactform">PB</Link> */}
      <Switch>
        <Suspense>
          <Route exact path="/" >
           <SignUp />
          </Route>
          <Route exact path="/singin" >
           <SingIn />
        {/* <ContactForm path="/contactform" /> */}
           </Route>
           {/* <PrivateRoute path="/contactform" redirectTo="/">
        <ContactForm />
          </PrivateRoute  > */}
          {/* <Route path="/contactform">
            <ContactForm />
          </Route> */}
          
          
</Suspense>
    </Switch>
    </>
  );
}

export default App;
