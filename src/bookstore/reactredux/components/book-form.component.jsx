import React,{Component} from 'react';

export default class BookForm extends Component{
    constructor(...args){
        super(...args);
        this.handleBookChange = this.handleBookChange.bind(this);
        this.state = {
            ...this.props.book
        };
        console.log('Initial state in constructor',this.state);
    }

    componentWillReceiveProps(nextProps) {   
        console.log(nextProps, this.props); 
        if (nextProps !== this.props){
            console.log('In here');
            this.setState({
                ...nextProps.book
                }
            );
            console.log('state after receive props',this.state);
        }
        
    }


    handleBookChange = (e) => {
            let val = e.target.value;
            let name = e.target.name;
            this.setState({
                [name]: val
            });         
    }

    render(){
        console.log('In render',this.state);
        return (
            <div>
                <label>
                    Name:
                    <input name="name" value={this.state.name} onChange={this.handleBookChange}/>
                </label>
                <label>
                    Author:
                    <input name="author" value={this.state.author} onChange={this.handleBookChange}/>
                </label>
                <label>
                    Year:
                    <input name="year" value={this.state.year} onChange={this.handleBookChange}/>
                </label>
                <button onClick={() => this.props.onSubmit(this.state)}>Submit</button>
            </div>
        );
    }
}