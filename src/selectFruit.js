import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class FlavorForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { value : 'banana'}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ value : event.target.value })
    }

    handleSubmit(event){
        alert('Your favorite flavor is : '  + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="selector">Pick your favorite Flavor</label>
                <select id="selector" value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">GrapeFruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value = "banana">Banana</option>
                </select>
                <input type="submit" value="Check!"/>
            </form>
        )
    }

}

root.render(
    <FlavorForm/>
)
