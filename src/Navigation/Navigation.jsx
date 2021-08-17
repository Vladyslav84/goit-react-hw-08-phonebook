import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';


export default function Navigation() {
    
    return (
        <>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Log in
      </NavLink>
    </>
   )

}