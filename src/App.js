
import { Switch } from 'react-router-dom';
import SignUp from '../src/SingUp/SingUp';
import SingIn from '../src/SignIn/SignIn';
import ContactForm from '../src/ContactForm/ContactForm'
import React, {  Suspense, useEffect } from 'react';
import PrivateRoute from '../src/PrivateRoute';
import PublicRoute from '../src/PublicRoute'
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from './redux/slices/authentication/auth-selectors';
import aut_operation from './redux/slices/authentication/aut_operation';

function App() {

  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

    useEffect(() => {
    dispatch(aut_operation.fetchCurrentUser());
  }, [dispatch]);

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
