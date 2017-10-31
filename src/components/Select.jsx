import React,{Component} from 'react';

class Select extends Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
        <select onChange={this.props.changeInput}>
            {
                this.props.options.map((val) => {return <option key={val}>{val}</option>})
            }
        </select>
        );
    }
}

export  default Select;