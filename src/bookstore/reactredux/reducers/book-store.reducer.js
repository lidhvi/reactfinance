import {Constants} from '../util/book-store.constants'
export default (state = [], action) => {
    console.log('Hi', action);
    switch(action.type){
        case Constants.ADD_BOOK: 
            return { 
                ...state,
                bookList: [
                    ...state.bookList, action.book
                ],
                book: {...action.book},
                formAction: 'ADD'
            };
        
        case Constants.EDIT_BOOK: 
        const currentBook = state.bookList.filter(
            (val)=>{
                if(val.id === action.id) 
                    return val;       
            }
        );
        console.log('Current book',currentBook);
        return { 
            ...state,
            formAction: 'UPDATE',
            book : {
                ...currentBook[0]
            }
        };

        case Constants.UPDATE_BOOK: 
            const newBookList = state.bookList.map(
                (val)=>{
                    return (val.id === action.book.id) ? val = {...action.book} : val ;    
                }
            );  
            console.log('New Booklist after update',newBookList);
            return { ...state,bookList: newBookList};

        case Constants.LOAD_NEW_BOOK: 
            return { ...state,formAction: 'ADD',book: action.book};

        default: return state;
    }  
};