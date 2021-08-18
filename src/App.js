// import Navigation from '../src/Navigation/Navigation';
import { Switch, Route  } from 'react-router-dom';
import SignUp from '../src/SingUp/SingUp';
import SingIn from '../src/SignIn/SignIn';
import ContactForm from '../src/ContactForm/ContactForm'

function App() {
  return (

      <Switch>
      <Route path="/goit-react-hw-08-phonebook" exact>
          <SignUp />
      </Route>
      <Route path="/singin" exact>
          <SingIn />
      </Route>
      <Route>
        <ContactForm path="/contactform"/>
      </Route>
          
    </Switch>




  );
}

export default App;
