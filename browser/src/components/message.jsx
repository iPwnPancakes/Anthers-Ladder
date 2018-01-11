let React = require('react');

class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <li className='message'>{this.props.time}: {this.props.message}</li>
        )
    }
}

module.exports = Message;