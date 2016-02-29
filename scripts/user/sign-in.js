var React = require('react');

var SignIn = React.createClass({
    render: function() {
        return <div className={this.props.className}>
        <form>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <hr />
        <input type="button" value="Sign in" />
        </form></div>;
    }
});

module.exports = SignIn;