import React from 'react';
import { mount, shallow } from 'enzyme';
import { ItemsList } from '../index';

const defaultProps = {
  actions: {},
  items: []
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as table rows', () => {
    const items = [{ id: 1, content: 'Test 1', isComplete: false }, { id: 2, content: 'Test 2', isComplete: true }];
    const renderedItem = mount(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('.table').find('tbody').find('tr')).toHaveLength(2);
  });

  it('should call removeTask action when delete button clicked', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const removeTaskMock = jest.fn();
    const renderedItem = mount(
        <ItemsList {...defaultProps} items={items} actions={{removeTask: removeTaskMock}} />
    );
    renderedItem.find('.delete').first().simulate('click');
    expect(removeTaskMock.mock.calls.length).toBe(1);
  });

  it('should call toggleTaskCompletion action when item clicked', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const toggleTaskCompletionMock = jest.fn();
    const renderedItem = mount(
        <ItemsList {...defaultProps} items={items} actions={{toggleTaskCompletion: toggleTaskCompletionMock}} />
    );
    renderedItem.find('.item').first().simulate('click');
    expect(toggleTaskCompletionMock.mock.calls.length).toBe(1);
  });

  it('should call filterTaskCompletetion action when item clicked', () => {
    const filterTaskCompletetionMock = jest.fn();
    const renderedItem = mount(
        <ItemsList {...defaultProps} actions={{filterTaskCompletetion: filterTaskCompletetionMock}} />
    );
    renderedItem.find('.status').find('select').simulate('change');
    expect(filterTaskCompletetionMock.mock.calls.length).toBe(1);
  });

});
