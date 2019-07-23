import React, { Component } from 'react';
import { connect } from 'react-redux';
import StateLink from '../components/StateLink';
import { orderedStates } from '../states';

class Representatives extends Component {
  render() {
    let { match } = this.props;
    return (
      <div>
        {orderedStates.map(arr => {
          return (
            <StateLink key={arr[0] + arr[1]} stateArr={arr} match={match} />
          );
        })}
      </div>
    );
  }
}

let mapStateToProps = ({ reps }) => reps;

export default connect(mapStateToProps)(Representatives);
