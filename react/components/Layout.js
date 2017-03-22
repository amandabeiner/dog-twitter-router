import React from 'react';
import { Link, browserHistory } from 'react-router';

const Layout = props => {
  return(
    <div>
      <h1>Barker</h1>
      <h4>Like Twitter but for dogs</h4>
      {props.children}
    </div>
  )
}

export default Layout;
