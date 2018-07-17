import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

export default class ItemList extends Component {
  render() {
    const { entries } = this.props;

    return (
      <ul>
        {entries.map(todo => {
          return React.createElement(this.props.itemRenderer, todo);
        })}
      </ul>
    );
  }
}

ItemList.propTypes = { itemRenderer: PropTypes.func };
ItemList.defaultProps = { entries: [], itemRenderer: Todo };
