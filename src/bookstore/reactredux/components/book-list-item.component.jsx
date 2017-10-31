import React,{Component} from 'react';

export default class BookListItem extends Component{
    
    render(){
       return(
        <li>
            {this.props.name}
            <button onClick={this.props.onEdit}>Edit</button>
        </li>  
       );
    }
}