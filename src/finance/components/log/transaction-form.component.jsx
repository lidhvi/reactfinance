import React, { Component } from 'react';

export default class TransactionForm extends Component{

    render(){
       return(
            <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input id="name" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <select className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Transaction Date</label>
                    <input type="date" className="form-control"/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
       ); 
    }

}