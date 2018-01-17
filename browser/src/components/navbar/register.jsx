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
            <form id='register' ref={form => { this.form = form }} style={{ display: 'none' }}>
                <label htmlFor='email'>Email</label>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='E-Mail'
                    ref={email => { this.email = email }}
                />
                <br/>
                <label htmlFor='username'>Username</label>
                <input 
                    type='text' 
                    name='username' 
                    placeholder='Username'
                    ref={username => { this.username = username }}
                />
                <br/>
                <label htmlFor='password'>Password</label>
                <input 
                    type='text' 
                    name='password' 
                    placeholder='Password'
                    ref={(password) => { this.password = password }}
                />
                <br/>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input 
                    type='text' 
                    name='password' 
                    placeholder='Confirm Password'
                    ref={(confirmPassword) => { this.confirmPassword = confirmPassword }}
                />
                <br/>
                <button type='submit' onClick={this.handleSubmit.bind(this)}>Submit</button>
            </form>
        )
    }
}

module.exports = Register;