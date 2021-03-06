import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing : true,
            numberOfGuests : 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <form>
                <label htmlFor='isGoing'>Is going</label>
                <input id='isGoing' name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                <br/>

                <label htmlFor='numberOfGuests'>Number of guests</label>
                <input name='numberOfGuests' type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
            </form>
        )
    }
}

root.render(
    <Reservation/>
)
