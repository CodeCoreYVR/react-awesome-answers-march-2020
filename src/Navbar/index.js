import React from 'react';
import { NavLink } from 'react-router-dom';
import CurrentDateTime from '../CurrentDateTime';

function Navbar(props) {
  return(
    <nav>
      <NavLink to='/questions'>Questions Index</NavLink>
      <CurrentDateTime/>
    </nav>
  )
}

export default Navbar