import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {financeStore} from './finance/defaults/default.state';
import { createStore, compose } from 'redux';
import transactionReducer from './finance/reducers/transaction-log.reducer';
import { Provider } from 'react-redux';
import FinanceRoot from './FinanceRoot';

const finState = createStore(transactionReducer,financeStore);
ReactDOM.render(<Provider store={finState}><FinanceRoot/></Provider>,document.getElementById('root'));
registerServiceWorker();
