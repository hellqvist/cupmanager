var React = require('react');
var io = require('socket.io-client');

var SignIn = React.createClass({
    componentDidMount: function() {
        this.socket = io();
    },
    signIn: function() {
        var email = this.refs.email;
        var password = this.refs.password;
        if (email.value != '' && password !== '') {
            this.socket.emit('signIn', { email: email.value, password: password.value });
        }
    },
    render: function() {
        return <div className={this.props.className}>
        <form>
        <input type="text" placeholder="E-mail" ref="email" />
        <input type="password" placeholder="Password" ref="password" />
        <hr />
        <input type="button" value="Sign in" onClick={this.signIn} />
        </form></div>;
    }
});

module.exports = SignIn;