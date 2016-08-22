import React, { Component } from 'react';
import { render } from 'react-dom';
import LookupStore from '../stores/LookupStore';
import UserActions from '../actions/UserActions';
import SymbolSearch from './SymbolSearch';
import OneSymbol from './OneSymbol';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      status: "home",
      detailParam: ""
    }

    this.changeStatus = this.changeStatus.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
  }

  changeStatus() {
    this.setState({status: "detail"});
  }

  changeDetail(param) {
    this.setState({detailParam: param});
  }

  render() {
    switch (this.state.status) {
      case "home":
      return (
        <SymbolSearch changeDetail={this.changeDetail}/>
      )
      break;
      case "detail":
      return (
        <OneSymbol details={this.state.detailParam}/>
      )
      break;
    }
  }
}
