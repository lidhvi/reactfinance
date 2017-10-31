import React, { Component } from 'react';
import Transaction from './transaction.component';
import TransactionForm from './transaction-form.component';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TransactionList extends Component{

    render(){
        return (
            this.props.transactionList.map((entry)=> {
                                                return(
                                                <tr>
                                                    <td><Transaction {...entry} transaction={entry}/></td>
                                                    <td>1,001</td>
                                                    <td>30-Oct-2017</td>
                                                </tr>
                                                );    
                                            })
        );
    }

}