import React from 'react';
import { Header } from '../components';
import * as Routes from '../constants/routes';
import png from '../logo.png';

export function HeaderContainer({ children, ...restProps }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={Routes.HOME} alt="Essflix" src={png} />
        <Header.ButtonLink to={Routes.SIGN_IN}>Sign in</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
