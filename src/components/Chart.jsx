import React,{Component} from 'react';
import Highcharts from 'highcharts';

class Chart extends Component{

	constructor(props){
        super(props);
        this.state = {
            text: 'Test 1',
        highchartsOptions: {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'bar'
			},
			title: {
				text: 'Browser market shares January, 2015 to May, 2015'
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					}
				}
			},
			series: [{
				name: 'Brands',
				colorByPoint: true,
				data: [{
					name: 'Microsoft Internet Explorer',
					y: 56.33
				}, {
					name: 'Chrome',
					y: 24.03,
					sliced: true,
					selected: true
				}, {
					name: 'Firefox',
					y: 10.38
				}, {
					name: 'Safari',
					y: 4.77
				}, {
					name: 'Opera',
					y: 0.91
				}, {
					name: 'Proprietary or Undetectable',
					y: 0.2
				}]
            }]
        }
		};
	}

    componentDidMount(){
        this.state.highchartsOptions.chart.type = this.props.type;
        Highcharts.chart("container",this.state.highchartsOptions);
    }

    componentDidUpdate() {
        let highchartsOptions= {
            ... this.state.highchartsOptions,
            chart: {
               ... this.state.highchartsOptions.chart,
               type:  this.props.type
            }
        }
        Highcharts.chart("container", highchartsOptions);
    }

    testFunction = () => {
        this.setState( {
            text: "Test 2"
        })
    }

    render(){
        return (<div>
            <div id="container" onClick={this.testFunction}></div>
            <div>{this.state.text}</div>
        </div>
    );
        
    }
}

export default Chart;