import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 10px 0px;
`;

export default function({ stateArr, match }) {
  return (
    <div key={stateArr[0] + stateArr[1]}>
      <CustomLink to={`${match.path}/${stateArr[1]}`}>{stateArr[0]}</CustomLink>
    </div>
  );
}
