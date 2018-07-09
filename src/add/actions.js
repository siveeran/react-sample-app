function add(itemName){
    return function(dispatch) {
        let newItem = {
            name: itemName,
            description: itemName+' description...',
            isDone: false
        };
        dispatch({type:"ADD", payload: newItem});
    }
}

export default { add };