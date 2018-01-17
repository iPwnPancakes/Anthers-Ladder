let React = require('react');

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    
    isVisible() {
        return this.form.style.display === 'block';
    }

    toggleVisible() {
        this.form.style.display = (this.form.style.display === 'none') ? 'block' : 'none';
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
            <form id='login' ref={form => { this.form = form }} style={{ display: 'none' }}>
                <label htmlFor='username'>Username</label>
                <input 
                    type='text' 
                    name='username' 
                    placeholder='username'
                    ref={username => { this.username = username }}
                />
                <br/>
                <label htmlFor='password'>Password</label>
                <input 
                    type='text' 
                    name='password' 
                    placeholder='password'
                    ref={(password) => { this.password = password }}
                />
                <br/>
                <button type='submit' onClick={this.handleSubmit.bind(this)}>Submit</button>
            </form>
        )
    }
}

module.exports = Login;