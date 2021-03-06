import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ value : event.target.value });
    }

    handleSubmit(event){
        alert('A name was submitted : ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label for="name">Name : </label>
                <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>

                <p>input Value : {this.state.value}</p>
            </form>
        )
    }
}

root.render(
    <NameForm />
)
