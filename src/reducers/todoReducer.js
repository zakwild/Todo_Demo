import * as types from './../actions/actionTypes';
import initialState from './initialState';

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK_SUCCESS:
            const nextId =
            state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
            const newItem = {
                id: nextId,
                content: action.content,
                isComplete: false
            };
    
            return {
                ...state,
                items: [...state.items, newItem],
            };

        case types.REMOVE_TASK_SUCCESS:
            return {
                ...state,
                items: [
                    ...state.items.filter(task => task.id !== action.task.id)
                ]
            };

        case types.TOGGLE_TASK_COMPLETETION:
            const currentTask = action.task;
            return {
                ...state,
                items:[
                    ...state.items.filter(task => task.id !== action.task.id),
                    Object.assign({}, currentTask, {isComplete : !currentTask.isComplete})
                ]
            };
        
        case types.FILTER_TASK_COMPLETETION:
            return Object.assign({}, state, {
                showCompletedTasks : !state.showCompletedTasks
            });
        
        default:
            return state;
    }
  };
  
  export default todoReducer;