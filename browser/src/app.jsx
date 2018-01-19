const React = require('react');
const ReactDOM = require('react-dom');
const Navigation = require('./components/navbar/navbar.jsx');
const Chat = require('./components/chat/chat.jsx');
const Footer = require('./components/footer/footer.jsx');
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }
    
    logIn(username) {
        this.state.loggedIn = true;
        this.setState({ loggedIn: this.state.loggedIn });
        console.log(username);
        console.log(this.state)
    }
    
    toggleChat() {
        this.chat.toggleVisible();
    }

    render() {
        return (
            <div>
                <Navigation logIn={this.logIn.bind(this)} toggleChat={this.toggleChat.bind(this)} />

                <Chat ref={chat => { this.chat = chat }} />

                <Footer />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));