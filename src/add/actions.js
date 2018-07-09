import todoListService from '../todo/services/todoListServer.js';

function add(itemName){
    return function(dispatch) {
        let newItem = {
            id: 0,
            name: itemName,
            description: itemName+' description...',
            isDone: false
        };
        todoListService
        .save(newItem)
        .then((response => {
            dispatch({type:"ADD", payload: response});
        }));
    }
}

export default { add };