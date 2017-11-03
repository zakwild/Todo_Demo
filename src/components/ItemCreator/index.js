import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import AddTaskForm from './AddTaskForm';

export class ItemCreator extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
          task: ''
        };

        this.onSaveTask = this.onSaveTask.bind(this);
        this.updateTaskState = this.updateTaskState.bind(this);
    }

    updateTaskState(event) {
      const task = event.target.value;
      return this.setState({
          task: task
      });
    }

    onSaveTask(event){
      event.preventDefault();
      if(this.state.task.length < 0){
        return;
      }

      this.props.actions.addTask(this.state.task);
      this.setState({
        task: ''
      });

    }

    render() {
      return (
          <AddTaskForm
              onChangeTask={this.updateTaskState}
              task={this.state.task}
              onSaveTask={this.onSaveTask}
          />
      );
    }
}

ItemCreator.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
});

export default connect(null, mapDispatchToProps)(ItemCreator);
