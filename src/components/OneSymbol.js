import React, { Component } from 'react';

export default class OneSymbol extends Component {
  constructor() {
    super();

    this.state = {
      details: ""
    }
  }

  componentDidMount() {
    DetailStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    DetailStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      details: DetailStore.getDetails(this.props.detailParam)
    })
  }

  render() {
    return (
      <p>
      {this.state.details}
      </p>
    )
  }
}
