import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Toggle extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isToggleOn : true,
        }
        //this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return(
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }

    handleClick(){
        this.setState({
            isToggleOn : !this.state.isToggleOn
        });
    }

}

root.render(
    <Toggle/>
);
