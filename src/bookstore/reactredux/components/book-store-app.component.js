import React,{Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  BookListContainer from './book-list-container.component';
import  ToolBarContainer  from './tool-bar-container.component';
import  BookFormContainer  from './book-form-container.component';

export default class BookStoreApp extends Component{

    render(){
        return (
            <div>
                <ToolBarContainer /> 
                <BookFormContainer /> 
            </div>
        );
    }
}