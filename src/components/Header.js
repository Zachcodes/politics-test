import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../styled/Div';
import styled from 'styled-components';

const Head = styled(Div)`
  padding: 10px 15px;
  background-color: black;
  color: white;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0px 5px;
`;

export default function Header() {
  return (
    <Head flex justify="flex-end">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/senators">Senators</NavLink>
      <NavLink to="/representatives">Representatives</NavLink>
    </Head>
  );
}
