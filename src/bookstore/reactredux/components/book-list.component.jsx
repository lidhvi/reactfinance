import React,{Component} from 'react';
import BookListItem from './book-list-item.component';

export default class BookList extends Component{

    render(){
       return <ul>
            {
                this.props.bookList.map(
                    (val)=>{
                        return <BookListItem key={val.id.toString()} {...val} onEdit={() => this.props.onEdit(val.id)}></BookListItem> ;
                    }
                )
            }
        </ul> ;
    }
}