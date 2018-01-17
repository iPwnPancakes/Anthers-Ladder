const React = require('react');
const Register = require('./register.jsx');
const Login = require('./login.jsx');

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    
    onChatClick(event) {
        event.preventDefault();
        this.props.toggleChat();
    }
    
    onRegisterClick(event) {
        event.preventDefault();
        if(this.loginForm.isVisible()) {
            this.loginForm.toggleVisible();
        }
        this.registerForm.toggleVisible();
    }

    onLoginNavClick(event) {
        event.preventDefault();
        if(this.registerForm.isVisible()) {
            this.registerForm.toggleVisible();
        }
        this.loginForm.toggleVisible();
    }

    render() {
        return (
            <div id='navbar'>
                <ul>
                    <li><a href={window.location.href}>Home</a></li>
                    <li><a href='' onClick={this.onChatClick.bind(this)}>Chat</a></li>
                    <li> <a href='' onClick={this.onRegisterClick.bind(this)}>Register</a> </li>
                    <li> <a href='' onClick={this.onLoginNavClick.bind(this)}>Login</a> </li>
                    <Register ref={registerForm => { this.registerForm = registerForm }} logIn={this.props.logIn} />
                    <Login ref={(loginForm) => { this.loginForm = loginForm }} logIn={this.props.logIn} />
                </ul>
            </div>
        )
    }
}

module.exports = Navigation;