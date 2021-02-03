import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({
  user,
  path,
  loggedInPath,
  children,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={() => {
        if (path === '/404') {
          return children;
        }
        if (
          path === '/signin' ||
          path === '/signup' ||
          path === '/browse' ||
          path === '/home' ||
          path === '/'
        ) {
          if (!user) {
            return children;
          }

          if (user) {
            return (
              <Redirect
                to={{
                  pathname: loggedInPath,
                }}
              />
            );
          }
        } else {
          <Redirect
            to={{
              pathname: '/404',
            }}
          />;
        }
        return null;
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
