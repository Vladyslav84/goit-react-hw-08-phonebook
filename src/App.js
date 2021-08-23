// import Navigation from '../src/Navigation/Navigation';
import { Switch } from 'react-router-dom';
import SignUp from '../src/SingUp/SingUp';
import SingIn from '../src/SignIn/SignIn';
import ContactForm from '../src/ContactForm/ContactForm'
import React, {  Suspense } from 'react';
import PrivateRoute from '../src/PrivateRoute';
import PublicRoute from '../src/PublicRoute'
// import ContactForm from '../src/ContactForm/ContactForm';


function App() {
  return (
<>
      {/* <Link to="/contactform">PB</Link> */}
      <Switch>
        <Suspense>
          <PublicRoute exact path="/" redirectTo='/contactform' restricted>
           <SignUp />
          </PublicRoute>
          <PublicRoute exact path="/singin" redirectTo='/contactform' restricted>
           <SingIn />
          </PublicRoute>
           <PrivateRoute exact path="/contactform" redirectTo="/">
           <ContactForm />
          </PrivateRoute  >
       </Suspense>
    </Switch>
    </>
  );
}

export default App;
