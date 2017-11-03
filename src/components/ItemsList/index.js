import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import ItemsListRow from './ItemsListRow';
import {filterByCompleted, sortByContent} from './../../selectors/taskSelector';
import './styles.css';

export class ItemsList extends React.Component {
  constructor(props, context){
    super(props, context);
    this.DeleteTask = this.DeleteTask.bind(this);
    this.ToggleTaskCompletion = this.ToggleTaskCompletion.bind(this);
    this.DisplayResults = this.DisplayResults.bind(this);
    this.FilterTasksByCompletion = this.FilterTasksByCompletion.bind(this);
  }

  DeleteTask(item){
      this.props.actions.removeTask(item);
  }

  ToggleTaskCompletion(item){
      this.props.actions.toggleTaskCompletion(item);
  }

  DisplayNoResult(){
    return (<p id="items-missing">Add some tasks above.</p>);
  }
  
  FilterTasksByCompletion(event){
      this.props.actions.filterTaskCompletetion();
  }

  DisplayResults(){
    return (
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Tasks</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map(item => 
                <ItemsListRow
                  key={item.id}
                  item={item}
                  onCompleteTask={() => this.ToggleTaskCompletion(item)}
                  onDeleteTask={() => this.DeleteTask(item)}
                />
              )}
            </tbody>
          </table>
        </div>
    );
  }

  render() {
    return (
      <div>
      <div className="status">
        <label>Status: </label>
        <select onChange={this.FilterTasksByCompletion}>
          <option value="completed">All tasks</option>
          <option value="uncomplete">Uncomplete tasks</option>
        </select>
      </div>
        {this.props.items.length < 1 ? this.DisplayNoResult() : this.DisplayResults()}
      </div>
    );
  }
}

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  // Can Momoize the sorting to optimze performance
  // taking new instance of items so state not mutated
  const {items : [...items] , showCompletedTasks} = state.todos;
  const tasks = sortByContent(items);
  if(showCompletedTasks === false){
    return {
      items: filterByCompleted(tasks)
    }
  }
  return { items: tasks };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
