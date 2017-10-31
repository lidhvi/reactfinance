import React, { Component } from 'react';

export default class Transaction extends Component{

    render(){
       return(
           <label>{this.props.name}</label>
       ); 
    }

}