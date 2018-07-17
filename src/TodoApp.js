import React, { Component } from 'react';
import ItemList from './ItemList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { key: 1, text: 'Item #1' },
        { key: 2, text: 'Item #2' },
        { key: 3, text: 'Item #3' },
      ],
    };
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="enter task" />
            <button type="submit">add</button>
          </form>
        </div>
        <ItemList entries={this.state.todos} />
      </div>
    );
  }
}

export default TodoApp;
