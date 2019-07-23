import React from 'react';

export default function DisplaySenator({ senator }) {
  let { name, link, district, office, party, phone, state } = senator;
  return (
    <div>
      <h3>{name}</h3>
      <span>District: {district}</span>
      <span>Office: {office}</span>
      <span>Party: {party}</span>
      <span>Phone: {phone}</span>
      <span>State: {state}</span>
      <span>Link: {link}</span>
    </div>
  );
}
