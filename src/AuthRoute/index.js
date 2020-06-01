import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute(props) {
  // props looks like: 
  // {
  //   isAuthenticated: null | { first_name: 'jon', last_name: 'snow' ... },
  //   render: null | () => {} | function() {},
  //   component: null | <Component />,
  //   hello: 'world',
  //   anythingElse: 1
  // }
  const {
    isAuthenticated = false, // default to the value of false if `isAuthenticated` is a falsey value
    render, // is a function that will return a reactComponent
    component: Component,  // a react component
    helloWorld,
    ...restProps
  } = props;

  console.log(restProps);
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        if (isAuthenticated) {
          if (typeof render === 'function') {
            return render(routeProps);
          } else {
            return <Component {...routeProps} />
          }
        } else {
          return <Redirect to='/sign_in'/>
        }
      }}
    />
  )
}

export default AuthRoute