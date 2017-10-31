import React, { Component } from 'react';
import './finance/styles/FinanceAppStyles.css';
import TransactionListContainer from './finance/components/log/transaction-list-container.component';

export default class FinanceRoot extends Component{
  render(){
    return(
    <div>
      <TransactionListContainer/>
    </div>
    );
  }
}