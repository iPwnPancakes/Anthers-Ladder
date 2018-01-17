const React = require('react');
const Register = require('./register.jsx');
const Login = require('./login.jsx');

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    
    onRegisterClick(event) {
        event.preventDefault();
        this.registerForm.toggleVisible();
    }

    onLoginNavClick(event) {
        event.preventDefault();
        this.loginForm.toggleVisible();
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Home</li>
                    <li>Chat</li>
                    <li>
                        <span onClick={this.onRegisterClick.bind(this)}>Register</span>
                        <Register ref={registerForm => { this.registerForm = registerForm }} />
                    </li>
                    <li>
                        <span onClick={this.onLoginNavClick.bind(this)}>Login</span>
                        <Login ref={(loginForm) => { this.loginForm = loginForm }} />
                    </li>
                </ul>
            </div>
        )
    }
}

module.exports = Navigation;