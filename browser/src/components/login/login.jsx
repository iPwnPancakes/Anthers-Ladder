let React = require('react');

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.username.value + ' ' + this.password.value);
    }

    render() {
        return (
            <form>
                <label htmlFor='username'>Username</label>
                <input 
                    type='text' 
                    name='username' 
                    placeholder='username'
                    ref={username => { this.username = username }}
                />

                <label htmlFor='password'>Password</label>
                <input 
                    type='text' 
                    name='password' 
                    placeholder='password'
                    ref={(password) => { this.password = password }}
                />

                <button type='submit' onClick={this.handleSubmit.bind(this)}>Submit</button>
            </form>
        )
    }
}

module.exports = Login;