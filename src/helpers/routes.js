import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ErrorPage from '../pages/404';

export function IsUserRedirect({
  user,
  path,
  loggedInPath,
  children,
  ...rest
}) {
  return (
    <Route
      path={path}
      exact
      {...rest}
      render={(path) => {
        const theNewpath = path.location.pathname;
        if (
          theNewpath === '/' ||
          theNewpath === '/signin' ||
          theNewpath === '/signup'
        ) {
          return children;
        }
        return <ErrorPage />;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
