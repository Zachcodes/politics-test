import React from 'react';
import { Link } from 'react-router-dom';

export default function({ stateArr, match }) {
  return (
    <div key={stateArr[0] + stateArr[1]}>
      <Link to={`${match.path}/${stateArr[1]}`}>{stateArr[0]}</Link>
    </div>
  );
}
