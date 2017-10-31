
import React, { Component } from 'react';
import Select from './Select.jsx';
import Chart from './Chart.jsx';
class DynamicChart extends Component{

  constructor(props){
    super(props);
    this.handleChartTypeChange = this.handleChartTypeChange.bind(this);
    this.state = {
        chartOptions : ['bar','pie'],
        selectedChartOption : 'bar'
    };
  }

  handleChartTypeChange(e){
    this.setState({
        selectedChartOption : e.target.value
    });
  }

  render(){
    return(
    <div>
      <Select options={this.state.chartOptions} changeInput={this.handleChartTypeChange}></Select>
      <Chart type={this.state.selectedChartOption}></Chart>
    </div>
    );
  }
}

export default DynamicChart;