import React, { Component } from 'react';

import './Example.css'
class Example extends Component {
  render() {
    return <div>{this.props.state.exampleText}</div>;
  }
}

export default Example;
