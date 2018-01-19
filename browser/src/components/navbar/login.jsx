let React = require('react');

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    submitUser(username, password) {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
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
        let username = this.username.value;
        let password = this.password.value;
        this.submitUser(username, password);
    }

    render() {
        return (
            <form id='login' className='form-inline' ref={form => { this.form = form }} >
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
                <button 
                    id='loginBtn' 
                    type='submit' 
                    className='btn btn-outline-success btn-block'
                    onClick={this.handleSubmit.bind(this)}
                >
                    Submit
                </button>
            </form>
        )
    }
}

module.exports = Login;