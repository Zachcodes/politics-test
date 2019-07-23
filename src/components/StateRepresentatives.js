import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRepsByState } from '../redux/actionCreators';
import DisplayRep from './DisplayRep';
import Div from '../styled/Div';

class StateRepresentatives extends Component {
  componentDidMount() {
    let { match, getRepsByState } = this.props;
    getRepsByState(match.params.state);
  }

  render() {
    let { representatives, loading } = this.props;
    if (loading) return <div>Loading...</div>;
    return (
      <Div flex direction="column">
        {representatives.map(r => (
          <DisplayRep key={r.name + r.district} rep={r} />
        ))}
      </Div>
    );
  }
}

let mapStateToProps = state => state.reps;

export default connect(
  mapStateToProps,
  { getRepsByState }
)(StateRepresentatives);
