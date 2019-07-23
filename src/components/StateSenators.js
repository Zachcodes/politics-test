import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSenatorsByState } from '../redux/actionCreators';
import DisplaySenator from './DisplaySenator';
import Div from '../styled/Div';

class StateSenators extends Component {
  componentDidMount() {
    let { match, getSenatorsByState } = this.props;
    getSenatorsByState(match.params.state);
  }

  render() {
    let { senators, loading } = this.props;
    if (loading) return <div>Loading...</div>;
    return (
      <Div flex direction="column">
        {senators.map(s => (
          <DisplaySenator key={s.name + s.district} senator={s} />
        ))}
      </Div>
    );
  }
}

let mapStateToProps = ({ senators }) => senators;

export default connect(
  mapStateToProps,
  { getSenatorsByState }
)(StateSenators);
