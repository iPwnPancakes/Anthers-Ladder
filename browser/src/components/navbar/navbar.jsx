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
        // Redirect to register page
    }

    onLoginNavClick(event) {
        event.preventDefault();
        // if(this.registerForm.isVisible()) {
        //     this.registerForm.toggleVisible();
        // }
        // this.loginForm.toggleVisible();
    }

    render() {
        return (
                <nav id='navbar' className='navbar navbar-light navbar-fixed-top'>
                    <div className='container-fluid'>
                        <ul className='nav navbar-expand-lg'>
                            <li className='navbar-header'>
                                <a href='#' className='navbar-brand' href={window.location.href}>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link' onClick={this.onChatClick.bind(this)}>Chat</a>
                            </li>
                        </ul>
                        <ul id='forms' className='nav navbar-right'>
                            <li className='nav-item'> 
                                <button className='btn btn-sm nav-link' onClick={this.onRegisterClick.bind(this)}>Register</button> 
                            </li>
                            <li className='nav-item dropdown'>
                                <div className='btn-group'>
                                <button href='#' className='btn dropdown-toggle' data-toggle='dropdown' onClick={this.onLoginNavClick.bind(this)} aria-haspopup="true" aria-expanded="false">Login</button>
                                    <div id='loginDropdown' className='dropdown-menu dropdown-menu-right' role='menu'>
                                        <button>Yes</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <Register ref={registerForm => { this.registerForm = registerForm }} logIn={this.props.logIn} />
                        <Login ref={(loginForm) => { this.loginForm = loginForm }} logIn={this.props.logIn} />
                    </div>
                </nav>
        )
    }
}

module.exports = Navigation;