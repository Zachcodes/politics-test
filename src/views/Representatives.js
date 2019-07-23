import React, { Component } from 'react';
import { connect } from 'react-redux';
import states from '../states';

class Representatives extends Component {
  render() {
    console.log('reps props', this.props);
    return <div>Representatives</div>;
  }
}

let mapStateToProps = ({ reps }) => reps;

export default connect(mapStateToProps)(Representatives);
