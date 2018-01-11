let React = require('react');
let MessageArea = require('./messagearea.jsx');
let InputArea = require('./inputarea.jsx');

let getCurrentTime = () => new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

let Messages = [
    {
        message: 'hello world!',
        time: getCurrentTime()
    },
    {
        message: 'This is the second message!',
        time: getCurrentTime()
    }
];

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Messages };
    }
    
    render() {
        return (
            <div>
                <h1>Chat</h1>
                <MessageArea Messages={this.state.Messages} />
                <InputArea Messages={this.state.Messages} addMessage={this.addMessage.bind(this)}/>
            </div>
        );
    }
    
    addMessage(message) {
        fetch('/api/messages', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
        .catch(err => { console.log(Error(err)) })
    }
}

module.exports = Chat;