import React from 'react';
import Div from '../styled/Div';
import styled from 'styled-components';

const PoliticianDiv = styled(Div)`
  padding: 10px;
  background-color: #ababab21;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 20px;
  max-width: 450px;
`;

const Name = styled.h3`
  margin: auto;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: black;
  font-size: 20px;
`;

export default function Politician({ politician }) {
  let { name, link, district, office, party, phone, state } = politician;
  return (
    <PoliticianDiv flex direction="column">
      <Name>{name}</Name>
      <Div marginBottom="10">District: {district}</Div>
      <Div marginBottom="10">Office: {office}</Div>
      <Div marginBottom="10">Party: {party}</Div>
      <Div marginBottom="10">Phone: {phone}</Div>
      <Div marginBottom="10">State: {state}</Div>
      <Link href={link}>{link}</Link>
    </PoliticianDiv>
  );
}
