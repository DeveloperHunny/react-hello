import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
        }
    };

    componentDidMount(){
        this.timerID = setInterval(() => {this.tick()}, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return(
            <div>
                <h1>This current time!</h1>
                <h2> NOW : {this.state.date.toLocaleTimeString()}. </h2>
            </div>
        )

    }

    tick(){
        this.setState({
            date : new Date(),
        });
    }
}



root.render(
    <Clock />
)
