import todoListServices from '../services/todoListServer.js';

function load(){
    return function(dispatch){
        todoListServices
        .getAllItems()
        .then(data => {
            dispatch({ type: 'LOAD', payload: data });
        });
    }
}
function markAsDone(item){
    return function(dispatch){
        item.isDone = true;
        todoListServices
        .save(item)
        .then(response => {
            dispatch({type: 'MARK_AS_DONE', payload: response});
        });
    }
}

function markAsUndone(item){
    return function(dispatch){
        item.isDone = false;
        todoListServices
        .save(item)
        .then(response => {
            dispatch({type: 'MARK_AS_UNDONE', payload: response});            
        });
    }
}

export default { load, markAsDone, markAsUndone };