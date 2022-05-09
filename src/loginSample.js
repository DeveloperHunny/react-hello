import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function UserGreeting(){
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(){
    return <h1>Please sign up.</h1>;
}

function Greeting(props){
    
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return <UserGreeting/>;
    }
    else{
        return <GuestGreeting/>;
    }
}

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn : false,
        };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick(){
        this.setState({isLoggedIn : true,});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn : false,});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(!isLoggedIn){
            button = <LoginButton onClick = {this.handleLoginClick}/>
        }
        else{
            button = <LogoutButton onClick = {this.handleLogoutClick}/>
        }

        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }



}

root.render(
    <LoginControl/>
);