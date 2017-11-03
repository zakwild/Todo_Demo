import * as types from './actionTypes';

export const addTask = content => {
    return { type: types.ADD_TASK_SUCCESS, content };
};

export const removeTask = task => {
    return { type: types.REMOVE_TASK_SUCCESS, task };
};

export const toggleTaskCompletion = task => {
    return { type: types.TOGGLE_TASK_COMPLETETION, task };
};

export const filterTaskCompletetion = () => {
    return { type: types.FILTER_TASK_COMPLETETION };
};