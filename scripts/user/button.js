var React = require('react');

var Button = React.createClass({
    render: function() {
        var className = "button " + this.props.className;
        return <a className={className} onClick={this.props.onClick}>{this.props.text}</a>;
    }
});

module.exports = Button;