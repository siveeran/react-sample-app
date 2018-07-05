import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';

const rootReducer = combineReducers({
    todoListData: todoListReducer
});

export default rootReducer;