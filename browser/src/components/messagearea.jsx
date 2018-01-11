let React = require('react');

class MessageArea extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id='chat'></div>
        );
    }
}

module.exports = MessageArea;