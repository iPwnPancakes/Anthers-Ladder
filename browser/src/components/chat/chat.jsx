let React = require('react');
let MessageArea = require('./messagearea.jsx');
let InputArea = require('./inputarea.jsx');
let io = require('socket.io-client')();

let getCurrentTime = () => new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

let Messages = [];

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Messages };
        
        io.on('broadcasted message', (message) => {
            this.addMessage(message)
        });
    }
    
    render() {
        return (
            <div>
                <h1>Chat</h1>
                <MessageArea Messages={this.state.Messages} />
                <InputArea 
                    Messages={this.state.Messages} 
                    addMessage={this.addMessage.bind(this)} 
                    sendMessage={this.sendMessage.bind(this)} 
                />
            </div>
        );
    }
    
    sendMessage(message) {
        // fetch('/api/message', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ message: message })
        // })
        // .then(res => {
        //     if(res.ok) {
        //         return res.json();
        //     } else {
        //         throw new Error(res.status + ' ' + res.statusText);
        //     }
        // })
        // .then(res => {
        //     console.log('Message Sent!');
        // })
        // .catch(console.log)
        io.emit('broadcasted message', message);
    }
    
    addMessage(message) {
        this.state.Messages.push({
            message: message,
            time: getCurrentTime()
        });
        this.setState({ Messages: this.state.Messages });
    }
}

module.exports = Chat;