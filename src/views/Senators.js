import React from 'react';
import StateLink from '../components/StateLink';
import { orderedStates } from '../states';

export default function Senators({ match }) {
  return (
    <div>
      {orderedStates.map(arr => {
        return <StateLink key={arr[0] + arr[1]} stateArr={arr} match={match} />;
      })}
    </div>
  );
}
