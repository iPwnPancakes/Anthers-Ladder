let React = require('react');
let MessageArea = require('./messagearea.jsx');
let InputArea = require('./inputarea.jsx');

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>Chat</h1>
                <MessageArea />
                <InputArea />
            </div>
        );
    }
    
    addMessage(event) {
        
    }
}

module.exports = Chat;