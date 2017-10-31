import React,{Component} from 'react';
import BookList from './book-list.component';
import { connect } from 'react-redux';
import { editBook } from '../actions/book-store.action-creator';


class BookListContainer extends Component{

    constructor(...args){
        super(...args);
        
    }

    getBookList = (bookList,filter) => {
        switch(filter){
            case 'SHOW_ALL' : 
                return bookList;
        }
    } ;

    render(){
    //    return (<BookList bookList={this.getBookList(this.props.allBookList,'SHOW_ALL')}></BookList>);
        return (<BookList bookList={this.props.bookList} onEdit={this.props.editBook}></BookList>);
    }
}

const mapStateToProps = (state) => {
        return {
            bookList : state.bookList
        }
    }

const mapDispatchToProps = (dispatch) => {
        return{
            editBook : (bookId)=>{
                dispatch(editBook(bookId));
            }
        }

    }

export default connect(mapStateToProps,
  mapDispatchToProps
)(BookListContainer)