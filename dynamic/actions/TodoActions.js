var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {
  create: function (text) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.TODO_CREATE,
      text: text
    });
  },

  updateText: function (id, text) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  },

  toggleComplete: function (todo) {
    var id = todo.id;
    if (todo.complete) {
      AppDispatcher.handleViewAction({
        actionType: TodoConstants.TODO_UNDO_COMPLETE,
        id: id
      });
    } else {
      AppDispatcher.handleViewAction({
        actionType: TodoConstants.TODO_COMPLETE,
        id: id
      });
    }
  },

  toggleCompleteAll: function () {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
    });
  },

  destroy: function (id) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.TODO_DESTROY,
      id: id
    });
  },

  destroyCompleted: function() {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.TODO_DESTROY_COMPLETED
    });
  }
};

module.exports = TodoActions;
