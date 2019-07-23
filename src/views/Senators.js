import React, { Component } from 'react';
import { connect } from 'react-redux';

class Senators extends Component {
  render() {
    console.log('senators props', this.props);
    return <div>Senators</div>;
  }
}

let mapStateToProps = ({ senators }) => senators;

export default connect(mapStateToProps)(Senators);
