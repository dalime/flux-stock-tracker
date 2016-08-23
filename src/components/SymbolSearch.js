import React, { Component } from 'react';
import { render } from 'react-dom';
import LookupStore from '../stores/LookupStore';
import DetailStore from '../stores/DetailStore';
import ChartStore from '../stores/ChartStore';
import UserActions from '../actions/UserActions';
import { Link } from 'react-router';

export default class SymbolSearch extends Component {
  constructor() {
    super();

    this.state = {
      searchText: "",
      lookups: []
    }

    this._onChange = this._onChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.searchDetail = this.searchDetail.bind(this);
  }

  componentDidMount() {
    LookupStore.startListening(this._onChange);
    ChartStore.startListening(this._onChange);
    UserActions.getDetails(this.props.params.id);
    UserActions.getChart(this.props.params.id);
  }

  componentWillUnmount() {
    LookupStore.stopListening(this._onChange);
    ChartStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      lookups: LookupStore.getLookup(this.state.searchText)
    })
  }

  onInputChange(e) {
    this.setState({searchText: e.target.value});
  }

  startSearch(e) {
    e.preventDefault();
    UserActions.getLookup(this.state.searchText);
  }

  searchDetail(e) {
    e.preventDefault();
    UserActions.getDetails(e.target.innerText);
  }

  render() {
    let rows = this.state.lookups.map((lookup, index) => {
      let path = "/" + lookup.Symbol
      return (
        <tr key={index}>
          <td>{lookup.Name}</td>
          <td>{lookup.Symbol}</td>
          <td>{lookup.Exchange}</td>
          <td><Link to={path}><button className="btn btn-success btn-sm">See Details</button></Link></td>
        </tr>
      )
    })

    return (
      <div className="container">
        <h1>Flux Stock Tracker</h1>
        <form className="form-group">
          <input type="text" onChange={this.onInputChange}/>
          <button className="btn btn-primary btn-sm" onClick={this.startSearch}>Search</button>
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Exchange</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}
