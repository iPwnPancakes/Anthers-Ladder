let React = require('react');
let ChatRoom = require('./chatroom.jsx');
let InputArea = require('./inputarea.jsx');

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>Chat</h1>
                <ChatRoom />
                <InputArea />
            </div>
        );
    }
}

module.exports = Chat;