import { combineReducers } from 'redux';
import mainMenuReducer from './mainMenuReducer';
import todoListReducer from './todoListReducer';

const rootReducer = combineReducers({
    mainMenuData: mainMenuReducer,
    todoListData: todoListReducer
});

export default rootReducer;