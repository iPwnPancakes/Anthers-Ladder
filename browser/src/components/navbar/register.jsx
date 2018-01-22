let React = require('react');
let EmailValidator = require('email-validator');

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    
    ifStringsSame(str, otherStr) {
        return str === otherStr;
    }
    
    registerUser(username, password, email) {
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.username + ' registered!');
            this.props.logIn(res.username);
        })
        .catch(console.log)
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.ifStringsSame(this.password.value, this.confirmPassword.value) && EmailValidator.validate(this.email.value)) {
            this.registerUser(this.username.value, this.password.value, this.email.value);
        } else {
            console.log('Error with input field values!');
        }
    }

    render() {
        return (
            <form id='register' className='form-inline' ref={form => { this.form = form }}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        className='form-control form-control-sm'
                        type='email' 
                        name='email' 
                        placeholder='E-Mail'
                        ref={email => { this.email = email }}
                    />
                </div>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input 
                        className='form-control form-control-sm'
                        type='text' 
                        name='username' 
                        placeholder='Username'
                        ref={username => { this.username = username }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        className='form-control form-control-sm'
                        type='text' 
                        name='password' 
                        placeholder='Password'
                        ref={(password) => { this.password = password }}
                    />
                </div>
                <div>
                    <input 
                        className='form-control form-control-sm'
                        type='text' 
                        name='password' 
                        placeholder='Confirm Password'
                        ref={(confirmPassword) => { this.confirmPassword = confirmPassword }}
                    />
                </div>
                <button
                    type='submit' 
                    className='btn btn-outline-success btn-block formButton' 
                    onClick={this.handleSubmit.bind(this)}
                > 
                    Create Account
                </button>
            </form>
        )
    }
}

module.exports = Register;