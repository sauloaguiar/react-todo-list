import React, { Component } from 'react';

export default class ItemList extends Component {
  createTasks(task) {
    return <li key={task.key}>{task.text}</li>;
  }
  render() {
    const { entries } = this.props;
    const list = entries.map(this.createTasks);
    return <ul>{list}</ul>;
  }
}
