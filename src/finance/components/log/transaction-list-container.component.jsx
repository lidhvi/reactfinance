import React, { Component } from 'react';
import TransactionList from './transaction-list.component';
import { connect } from 'react-redux';
import Transaction from './transaction.component';
import TransactionForm from './transaction-form.component';

class TransactionListContainer extends Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <a className="navbar-brand" href="#">StarTracker</a>
                        </div>
                        <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </nav>
                <main role="main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <TransactionList transactionList={this.props.transactionList}/>
                                        {
                                            this.props.transactionList.map((entry)=> {
                                                return(
                                                <tr>
                                                    <td><Transaction {...entry} transaction={entry}/></td>
                                                    <td>1,001</td>
                                                    <td>30-Oct-2017</td>
                                                </tr>
                                                );    
                                            })
                                        } 
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <TransactionForm/>
                            </div>
                        </div>
                    </div>
                    
                </main>
            </div>
            
        );
    }

}

const mapStateToProps = (state) =>{
    return {
        transactionList: state.log.transactionList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionListContainer);