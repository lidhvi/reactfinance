import {Constants} from '../util/book-store.constants'
let nextBookId = 0;
export function addBook(book){
    return {
        type : Constants.ADD_BOOK,
        book : {...book,id:++nextBookId}
    };
}

export function deleteBook(book){
    return {
        type : Constants.DEL_BOOK,
        book : book
    };
}

export function editBook(bookId){
    return {
        type : Constants.EDIT_BOOK,
        id : bookId
    };
}

export function updateBook(book){
    return {
        type: Constants.UPDATE_BOOK,
        book: book
    };
}

export function loadNewBook(book){
    return {
        type: Constants.LOAD_NEW_BOOK,
        book
    };
}

export function filterBook(book){
    return {
        type : Constants.FILTER_BOOK,
        book : book
    };
}