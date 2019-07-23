import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPoliticianByState } from '../redux/actionCreators';
import { GET_SENATORS } from '../redux/actionTypes';
import Politician from './Politician';
import Div from '../styled/Div';

class StateSenators extends Component {
  componentDidMount() {
    let { match, getPoliticianByState } = this.props;
    getPoliticianByState(match.params.state, 'senators', GET_SENATORS);
  }

  render() {
    let { senators, loading } = this.props;
    if (loading) return <div>Loading...</div>;
    return (
      <Div flex direction="column">
        {senators.map(s => (
          <Politician key={s.name + s.district} senator={s} />
        ))}
      </Div>
    );
  }
}

let mapStateToProps = ({ senators }) => senators;

export default connect(
  mapStateToProps,
  { getPoliticianByState }
)(StateSenators);
