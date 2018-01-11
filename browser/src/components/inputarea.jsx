let React = require('react');

class InputArea extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    validateInput(input) {
        if(!input || input === '') {
            return 'Input does not exist!';
        }
        return input;
    }
    
    handleClick(e) {
        e.preventDefault();
        let message = this.refs.inputText.value;
        if(message === this.validateInput(message)) {
            this.props.addMessage(message);
            this.refs.inputText.value = null;
        }
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