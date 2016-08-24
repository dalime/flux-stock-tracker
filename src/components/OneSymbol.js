import React, { Component } from 'react';
import UserActions from '../actions/UserActions';
import DetailStore from '../stores/DetailStore';
import ChartStore from '../stores/ChartStore';
import Chart from './Chart';

export default class OneSymbol extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: UserActions.getDetails(this.props.params.id),
      data: UserActions.getChart(this.props.params.id)
    }

    this._onChange = this._onChange.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    DetailStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    DetailStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      details: DetailStore.getDetails()
    })
  }

  refresh(e) {
    e.preventDefault();
    UserActions.getDetails(this.props.params.id);
    UserActions.getChart(this.props.params.id);
    this.setState({
      details: null,
      data: null
    })
  }

  render() {
    if (this.state.details) {
      return (
        <div className="container">
        <h1>Details for {this.state.details.Name}</h1>
        <ul>
        <li>Status: {this.state.details.Status}</li>
        <li>Name: {this.state.details.Name}</li>
        <li>Symbol: {this.state.details.Symbol}</li>
        <li>LastPrice: {this.state.details.LastPrice}</li>
        <li>Change: {this.state.details.Change}</li>
        <li>ChangePercent: {this.state.details.ChangePercent}</li>
        <li>Timestamp: {this.state.details.Timestamp}</li>
        <li>MSDate: {this.state.details.MSDate}</li>
        <li>MerketCap: {this.state.details.MarketCap}</li>
        <li>Volume: {this.state.details.Volume}</li>
        <li>ChangeYTD: {this.state.details.ChangeYTD}</li>
        <li>ChangePercentYTD: {this.state.details.ChangePercentYTD}</li>
        <li>High: {this.state.details.High}</li>
        <li>Low: {this.state.details.Low}</li>
        <li>Open: {this.state.details.Open}</li>
        </ul>
        <button className="btn btn-danger btn-sm" onClick={this.refresh}>Refresh</button>

        <Chart symbol={this.props.params.id} data={this.props.data}/>
        </div>
      )
    } else {
      return (
        <h1>Loading</h1>
      )
    }
  }
}
