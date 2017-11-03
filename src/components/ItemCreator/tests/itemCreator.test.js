import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemCreator } from '../index';

const defaultProps = {
  actions: { addTask: f => f }
};

describe('ItemCreator', () => {
  it('renders without crashing', () => {
    shallow(<ItemCreator {...defaultProps} />);
  });

  it('should call addTask action and clear input', () => {
    const addTaskMock = jest.fn();
    const renderedItem = mount(
      <ItemCreator {...defaultProps} actions={{addTask: addTaskMock}} />
    );
    renderedItem.find('.itemCreator-input').node.value = 'New Test Item';
    renderedItem.find('.itemCreator-button').simulate('click');
    expect(addTaskMock.mock.calls.length).toBe(1);
    expect(renderedItem.find('.itemCreator-input').node.value).toEqual('');
  });

  it('should not call action addTask', () => {
    const addTaskMock = jest.fn();
    const renderedItem = mount(
      <ItemCreator {...defaultProps} actions={{addTask: addTaskMock}} />
    );
    renderedItem.find('.itemCreator-input').node.value = '';
    expect(addTaskMock.mock.calls.length).toBe(0);
  });
  
});
