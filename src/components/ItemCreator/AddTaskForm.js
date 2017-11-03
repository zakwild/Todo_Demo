import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const AddTaskForm = ({ task, onSaveTask, onChangeTask }) => {
    return (
      <div className="itemCreator">
        <input
          value={task}
          className="itemCreator-input"
          type="text"
          onChange={onChangeTask}
          placeholder="What do you need to do?"
        />
        <input
          className="itemCreator-button"
          type="button"
          value="Add Task"
          onClick={onSaveTask}
        />
      </div>
    );
 };

 AddTaskForm.propTypes = {
    task: PropTypes.string.isRequired,
    onSaveTask: PropTypes.func.isRequired,
    onChangeTask: PropTypes.func.isRequired
 };

 export default AddTaskForm;