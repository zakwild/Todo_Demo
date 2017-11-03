import React from 'react';
import { shallow , mount} from 'enzyme';
import ItemListRow from '../ItemsListRow';

const defaultProps = {
  item: {},
  onDeleteTask: f => f,
  onCompleteTask: f => f
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemListRow {...defaultProps} />);
  });

  it('should set class item-complete if isComplete is "TRUE"',  () => {
    const item = {isComplete: true}
    const rendered = shallow(<ItemListRow {...defaultProps} item={item} />);
    expect(rendered.find('.item').hasClass('item-complete')).toBe(true);
  });

  it('should not set class item-complete if isComplete "FALSE"',  () => {
    const item = {isComplete: false}
    const rendered = shallow(<ItemListRow {...defaultProps} item={item} />);
    expect(rendered.find('.item').hasClass('item-complete')).toBe(false);
  });

  it('should call DeleteTask when delete button clicked', () => {
    const deleteTaskMock = jest.fn();
    const renderedItem = shallow(
        <ItemListRow {...defaultProps} onDeleteTask={deleteTaskMock} />
    );
    renderedItem.find('.delete').simulate('click');
    expect(deleteTaskMock.mock.calls.length).toBe(1);
  });

  it('should call onCompleteTask when item clicked', () => {
    const onCompleteTaskMock = jest.fn();
    const renderedItem = shallow(
        <ItemListRow {...defaultProps} onCompleteTask={onCompleteTaskMock} />
    );
    renderedItem.find('.item').simulate('click');
    expect(onCompleteTaskMock.mock.calls.length).toBe(1);
  });

});