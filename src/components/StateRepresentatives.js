import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPoliticianByState } from '../redux/actionCreators';
import { GET_REPRESENTATIVES } from '../redux/actionTypes';
import Politician from './Politician';
import Div from '../styled/Div';

class StateRepresentatives extends Component {
  componentDidMount() {
    let { match, getPoliticianByState } = this.props;
    getPoliticianByState(
      match.params.state,
      'representatives',
      GET_REPRESENTATIVES
    );
  }

  render() {
    let { representatives, loading } = this.props;
    if (loading) return <div>Loading...</div>;
    return (
      <Div flex direction="column">
        {representatives.map(r => (
          <Politician key={r.name + r.district} rep={r} />
        ))}
      </Div>
    );
  }
}

let mapStateToProps = state => state.reps;

export default connect(
  mapStateToProps,
  { getPoliticianByState }
)(StateRepresentatives);
