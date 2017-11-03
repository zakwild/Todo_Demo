import { addTask, removeTask, filterTaskCompletetion, toggleTaskCompletion} from '../../actions/todoActions';
import reducer from '../todoReducer';
import initialState from '../initialState';

describe('todoReducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result.items).toEqual(initialState.items);
  });

  it('should add new items on ADD_ITEM_SUCCESS and set isComplete to false', () => {
    const state = {
      items: [
        { id: 1, content: 'first' },
        { id: 2, content: 'second' },
      ]
    }
    const mockAction = addTask('third');
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id).toEqual(3);
    expect(result.items[2].content).toEqual('third');
    expect(result.items[2].isComplete).toEqual(false);
  });
  
  it('should remove item on REMOVE_ITEM_SUCCESS', () => {
    const state = {
      items: [
        { id: 1, content: 'first' },
        { id: 2, content: 'second' },
      ]
    }
    const mockAction = removeTask(state.items[1]);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(1);
  });

  it('should set showCompletedTasks to "TRUE"', () => {
    const state = {
      showCompletedTasks : false,
    }
    const mockAction = filterTaskCompletetion();
    const result = reducer(state, mockAction);
    expect(result.showCompletedTasks).toEqual(true);
  });

  it('should set showCompletedTasks to "FALSE"', () => {
    const state = {
      showCompletedTasks : true,
    }
    const mockAction = filterTaskCompletetion();
    const result = reducer(state, mockAction);
    expect(result.showCompletedTasks).toEqual(false);
  });

  it('should set task property isComplete to "FALSE"', () => {
    const state = {
      items: [
        { id: 0, isComplete: true },
        { id: 1, isComplete: false }
      ]
    }
    const mockAction = toggleTaskCompletion(state.items[0]);
    const result = reducer(state, mockAction);
    expect(result.items[0].isComplete).toEqual(false);
  });

  it('should set task property isComplete to "TRUE"', () => {
    const state = {
      items: [
        { id: 0,  isComplete: true },
        { id: 1, isComplete: false }
      ]
    }
    const mockAction = toggleTaskCompletion(state.items[1]);
    const result = reducer(state, mockAction);
    expect(result.items[1].isComplete).toEqual(true);
  });

});
