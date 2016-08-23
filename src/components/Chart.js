import React, { Component } from 'react';
import UserActions from '../actions/UserActions';
import ChartStore from '../stores/ChartStore';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class SimpleLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ChartStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ChartStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      data: ChartStore.getChart()
    })
  }

	render() {
    if (this.state.data) {
      console.log ('this.state.data:', this.state.data)
      let obj = this.state.data.map((value, index) => {
        return {Prices: value, Dates: index}
      })

      return (
        <LineChart width={600} height={300} data={obj}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="Dates"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="Prices" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      );
    } else {
      return (
        <h1>Loading</h1>
      )
    }
  }
}
