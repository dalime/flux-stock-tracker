import React, { Component } from 'react';
import { render } from 'react-dom';
import LookupStore from '../stores/LookupStore';
import UserActions from '../actions/UserActions';

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
  }

  componentDidMount() {
    LookupStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    LookupStore.stopListening(this._onChange);
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
    this.props.changeDetail(e.target.innerText);
  }

  render() {
    let Lis = this.state.lookups.map(lookup => {
      return <li onClick={this.searchDetail}>{lookup}</li>
    })

    return (
      <div>
        <h1>Flux Stock Tracker</h1>
        <input type="text" onChange={this.onInputChange}/>
        <button onClick={this.startSearch}>Search</button>
        <ul>
          {Lis}
        </ul>
      </div>
    )
  }
}
