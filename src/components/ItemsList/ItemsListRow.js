import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ItemsListRow = ({ item, onDeleteTask, onCompleteTask }) => {
  return (
      <tr>
        <td><span className={item.isComplete ? 'item item-complete' : 'item'}  onClick={onCompleteTask} >{item.content}</span></td>
        <td><input className="delete" type="button" onClick={onDeleteTask} value="Delete" /></td>
      </tr>
  );
};

ItemsListRow.propTypes = {
    item: PropTypes.object.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onCompleteTask: PropTypes.func.isRequired
};

export default ItemsListRow;