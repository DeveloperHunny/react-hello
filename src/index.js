import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function BoilingVerdict(props){

    const scaleName = scaleNames[props.scale];

    if(scaleName === 'Celsius'){
        if(props.value >= 100){
            return <p>The water would boil.</p>;
        }
        else{
            return <p>The water would not boil.</p>;
        }
    }

    if(scaleName === 'Fahrenheit'){
        if(props.value >= 212){
            return <p>The water would boil.</p>;
        }
        else{
            return <p>The water would not boil.</p>;
        }
    }

}

const scaleNames = {
    c : 'Celsius',
    f : 'Fahrenheit',
}

class TemperatureInput extends React.Component{

    constructor(props){
        super(props);
        this.state = { temperature : ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({ temperature : e.target.value });
    }

    render(){
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]} : </legend>
                <input value={temperature} onChange={this.handleChange}/>
                <BoilingVerdict scale={scale} value={this.state.temperature}/>
            </fieldset>
        )
    }
}

class Calculator extends React.Component{

    render(){
        return(
            <div>
                <TemperatureInput scale = 'c'/>
                <TemperatureInput scale = 'f'/>
            </div>
        );
    }
}

root.render(
    <Calculator/>
)

//변혼 함수 작성하기부터 다시 하면 됨!
