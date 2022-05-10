import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function ListItem(props){
    return <li>{props.value}</li>;
}

function NumberList(props){
    const numbers = props.numbers;

    return(
        <ul>{numbers.map(number => <ListItem key={number.toString()} value = {number}/>)}</ul>
    );
}

const numbers = [1,2,3,4,5];

root.render(
    <NumberList numbers ={numbers}/>
);
