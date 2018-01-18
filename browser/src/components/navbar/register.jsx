let React = require('react');
let EmailValidator = require('email-validator');

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    
    isVisible() {
        return this.form.style.display === 'block';
    }
    
    toggleVisible() {
        this.form.style.display = (this.form.style.display === 'none') ? 'block' : 'none';
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
            <form id='register' className='container' ref={form => { this.form = form }} style={{ display: 'none' }}>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        className='form-control form-control-sm'
                        type='email' 
                        name='email' 
                        placeholder='E-Mail'
                        ref={email => { this.email = email }}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input 
                        className='form-control form-control-sm'
                        type='text' 
                        name='username' 
                        placeholder='Username'
                        ref={username => { this.username = username }}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input 
                        className='form-control form-control-sm'
                        type='text' 
                        name='password' 
                        placeholder='Password'
                        ref={(password) => { this.password = password }}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input 
                        className='form-control form-control-sm'
                        type='text' 
                        name='password' 
                        placeholder='Confirm Password'
                        ref={(confirmPassword) => { this.confirmPassword = confirmPassword }}
                    />
                </div>
                <button type='submit' className='btn btn-outline-success' onClick={this.handleSubmit.bind(this)}>Create Account</button>
            </form>
        )
    }
}

module.exports = Register;