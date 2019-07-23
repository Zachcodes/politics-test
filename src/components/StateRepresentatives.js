import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRepsByState } from '../redux/actionCreators';

class StateRepresentatives extends Component {
  componentDidMount() {
    let { match, getRepsByState } = this.props;
    getRepsByState(match.params.state);
  }

  render() {
    console.log('this.props', this.props);
    return <div>State Reps;</div>;
  }
}

let mapStateToProps = state => state.reps;

export default connect(
  mapStateToProps,
  { getRepsByState }
)(StateRepresentatives);
