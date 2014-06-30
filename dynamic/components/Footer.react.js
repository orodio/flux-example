/** @jsx React.DOM */

var React          = require('react');
var ReactPropTypes = React.PropTypes;
var TodoActions    = require('../actions/TodoActions');

var Footer = React.createClass({
  propTypes: {
    allTodos: ReactPropTypes.object.isRequired
  },

  render: function () {
    var allTodos = this.props.allTodos,
        total    = Object.keys(allTodos).length;

    if (total === 0) return <noscript />;

    var completed = 0;
    for (var key in allTodos) {
      if (allTodos[key].complete) completed++;
    }

    var itemsLeft = total - completed,
        itemsLeftPhrase = (itemsLeft === 1 ? ' item' : ' items') + ' left';

    var clearCompletedButton;
    if (completed) {
      clearCompletedButton = (
        <button
          id="clear-completed"
          onClick={ this._onClearCompletedClick }
        >Clear Completed ({ completed })</button>
      )
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>{ itemsLeft }</strong>{ itemsLeftPhrase }
        </span>
        { clearCompletedButton }
      </footer>
    )
  },

  _onClearCompletedClick: function () {
    TodoActions.destroyCompleted();
  }
});

module.exports = Footer;
