let React = require('react');
let ReactDOM = require('react-dom');
let MessageItem = require('./message.jsx');

class MessageArea extends React.Component {
    constructor(props) {
        super(props);
    }
    
    renderMessages() {
        return this.props.Messages.map((messageObj, index) => {
            return <MessageItem key={index} message={messageObj.message} time={messageObj.time} />
        });
    }
    
    scrollToBottom() {
        //TODO make the chat scroll to the bottom on every message update
    }
    
    render() {
        return (
            <div id='chat' ref={chat => this.chat = chat}>
                <ul className='chatList'>
                    {this.renderMessages()}
                    {this.scrollToBottom()}
                </ul>
            </div>
        );
    }
}

module.exports = MessageArea;