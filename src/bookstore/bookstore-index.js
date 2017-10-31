import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BookStoreApp from './bookstore/reactredux/components/book-store-app.component';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import bookStoreReducer from './bookstore/reactredux/reducers/book-store.reducer';

const defaultState = {
    bookList: [],
    formAction: 'ADD',
    book: {
        id: 0,
        name: '',
        author: '',
        year: ''
    },
    filterConfig: {
        fromYear: '',
        toYear: '',
        period: 10
    }
};
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
let store = createStore(bookStoreReducer,defaultState, enhancers);
ReactDOM.render( 
        <Provider store={store}> 
            <BookStoreApp /> 
        </Provider>, document.getElementById('root')
        );
//registerServiceWorker();
