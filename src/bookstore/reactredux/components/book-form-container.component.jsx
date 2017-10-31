import React,{Component} from 'react';
import { connect } from 'react-redux';
import BookForm from './book-form.component';
import BookListContainer from './book-list-container.component';
import { addBook, updateBook, loadNewBook } from '../actions/book-store.action-creator'

class BookFormContainer extends Component{

    constructor(...args){
        super(...args);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = (book) => {
        if(this.props.formAction === 'ADD')
            return this.props.addBook(book);
        else if(this.props.formAction === 'UPDATE')
            return this.props.updateBook(book);
    }

    createNewBook = () =>{
        let newBook = {
            id: 0,
            name: '',
            author: '',
            year: ''
        };
        this.props.loadNewBook(newBook);
    }

    render(){
        return <div>BookForm
            <button onClick={this.createNewBook}>Add New Book</button>
            
            <BookListContainer style={(this.props.formAction === 'ADD')? {display:'none'} : {display:'block'}}/>
            <BookForm book={this.props.book} onSubmit={this.handleFormSubmit}/>
        </div> 
    }
}

const mapStateToProps = (state) => {
    return {
       book: state.book,
       formAction: state.formAction,
       filterConfig: state.filterConfig
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook : (book) => {dispatch(addBook(book))},
        updateBook: (book) => {dispatch(updateBook(book))},
        loadNewBook: (newBook) => {dispatch(loadNewBook(newBook))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookFormContainer);