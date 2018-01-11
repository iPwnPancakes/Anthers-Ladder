let React = require('react');

class InputArea extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        e.preventDefault();
        this.refs.inputText.value = null;
    }
    
    render() {
        return (
            <div id='inputarea'>
                <input type='text' ref='inputText' />
                <button onClick={this.handleClick}>Send</button>
            </div>
        );
    }
}

module.exports = InputArea;