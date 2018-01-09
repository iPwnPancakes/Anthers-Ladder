let React = require('react');

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <form>
                <input type="text" />
                <button id="sendMessage">Send</button>
            </form>
        );
    }
}

module.exports = ChatRoom;