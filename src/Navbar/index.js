import React from 'react';
import { NavLink } from 'react-router-dom';
import CurrentDateTime from '../CurrentDateTime';

function Navbar(props) {
  // props looks like { currentUser: { first_name: 'jon' }}
  const { currentUser } = props; // object destructuring
  return(
    <nav>
      <NavLink to='/questions'>Questions Index</NavLink>
      <NavLink to='/questions/new'>New Question?</NavLink>
      { !currentUser && <NavLink to='/sign_in'>Sign In</NavLink> }
      { currentUser && <span>{currentUser.first_name}</span>}
      <CurrentDateTime/>
    </nav>
  )
}

export default Navbar