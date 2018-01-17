const React = require('react');
const Login = require('./login.jsx');

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    onLoginNavClick(event) {
        event.preventDefault();
        this.login.toggleVisible();
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Home</li>
                    <li>Chat</li>
                    <li>Register</li>
                    <li onClick={this.onLoginNavClick.bind(this)} >
                        <span>Login</span>
                        <Login ref={(form) => { this.login = form }} />
                    </li>
                </ul>
            </div>
        )
    }
}

module.exports = Navigation;