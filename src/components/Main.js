import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      {this.props.children}
    )
  }
}
