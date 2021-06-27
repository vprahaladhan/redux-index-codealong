// ./src/components/todos/TodosContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

class TodosContainer extends Component {

  render() {
    return (
      <ul>
        {this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)}
      </ul>
    );
  }
};

export default connect(state => ({ todos: state.todos }))(TodosContainer);