import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTaskForm from '../AddTaskForm';

const defaultProps = {
  task: '',
  onSaveTask: () => {},
  onChangeTask: () => {}
};

describe('AddTaskForm', () => {
  it('renders without crashing', () => {
    shallow(<AddTaskForm {...defaultProps} />);
  });
  
  it('should call onSaveTask', () => {
    const onSaveTaskMock = jest.fn();
    const renderedItem = shallow(
      <AddTaskForm {...defaultProps} onSaveTask={onSaveTaskMock} />
    );
    renderedItem.find('.itemCreator-button').simulate('click');
    expect(onSaveTaskMock.mock.calls.length).toBe(1);
  });

  it('should call onChangeTask', () => {
    const onChangeTaskMock = jest.fn();
    const renderedItem = shallow(
      <AddTaskForm {...defaultProps} onChangeTask={onChangeTaskMock} />
    );
    renderedItem.find('.itemCreator-input').simulate('change');
    expect(onChangeTaskMock.mock.calls.length).toBe(1);
  });

  it('should set input value task', () => {
    const expectedValue = 'TEST';
    const renderedItem = shallow(
      <AddTaskForm {...defaultProps} task={expectedValue} />
    );
    const returnValue = renderedItem.find('.itemCreator-input').props().value;
    expect(returnValue).toBe('TEST');
  });

});
