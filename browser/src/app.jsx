const React = require('react');
const ReactDOM = require('react-dom');
const Navigation = require('./components/navbar/navbar.jsx');
const Chat = require('./components/chat/chat.jsx');
const Footer = require('./components/footer/footer.jsx');

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navigation />

                <Chat />

                <Footer />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));