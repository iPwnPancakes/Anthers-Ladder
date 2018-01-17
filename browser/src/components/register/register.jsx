let React = require('react');

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.email, this.username, this.password, this.confirmPassword);
    }

    render() {
        return (
            <form>
                <label htmlFor='email'>Email</label>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='E-Mail'
                    ref={email => { this.email = email }}
                />

                <label htmlFor='username'>Username</label>
                <input 
                    type='text' 
                    name='username' 
                    placeholder='Username'
                    ref={username => { this.username = username }}
                />

                <label htmlFor='password'>Password</label>
                <input 
                    type='text' 
                    name='password' 
                    placeholder='Password'
                    ref={(password) => { this.password = password }}
                />

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input 
                    type='text' 
                    name='password' 
                    placeholder='Confirm Password'
                    ref={(confirmPassword) => { this.confirmPassword = confirmPassword }}
                />

                <button type='submit' onClick={this.handleSubmit.bind(this)}>Submit</button>
            </form>
        )
    }
}

module.exports = Register;