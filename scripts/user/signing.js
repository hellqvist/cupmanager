var React = require('react');
var ReactDOM = require('react-dom');
var Button = require("./button");
var SignIn = require("./sign-in");

var Signing = React.createClass({
    getInitialState: function() {
        return { showSignIn: false };
    },
    onClickSignIn: function() {
        this.setState({ showSignIn: !this.state.showSignIn });
    },
    render: function() {
        return <div>
            <Button text="Sign up" />
            <Button className="button-signin" text="Sign in" onClick={this.onClickSignIn} />
            { this.state.showSignIn ? <SignIn className="dropdown" /> : null }
        </div>;
    }
});

ReactDOM.render(
    <Signing  />,
    document.getElementById('page-header-signing')
);