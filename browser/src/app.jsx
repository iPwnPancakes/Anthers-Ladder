let React = require('react');
let ReactDOM = require('react-dom');
let Login = require('./components/login/login.jsx');
let Chat = require('./components/chat/chat.jsx');


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Login />
                <Chat />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));