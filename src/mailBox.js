import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Mailbox(props){
    const unreadMessage = props.unreadMessage;

    return(
        <div>
            <h1>Hello!</h1>
            {unreadMessage.length > 0 &&
                <h2>
                    You have {unreadMessage.length} unread message.
                </h2>
            }
        </div>
    )
}



const messages = ['React' , 'Re: React', 'Re:Re: React'];
const emptyMessageBox = [];

root.render(
    <Mailbox unreadMessage={emptyMessageBox}/>
);