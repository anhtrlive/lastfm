import { Main, Navigation } from './styled/header';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ children }) {
  return (
    <>
      <Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search track</Link>
          </li>
        </ul>
      </Navigation>
      <Main>{children}</Main>
    </>
  );
}
