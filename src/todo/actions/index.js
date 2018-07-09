function markAsDone(item){
    return function(dispatch){
        item.isDone = true;
        dispatch({type: 'MARK_AS_DONE', payload: item});
    }
}

function markAsUndone(item){
    return function(dispatch){
        item.isDone = false;
        dispatch({type: 'MARK_AS_UNDONE', payload: item});
    }
}

export default { markAsDone, markAsUndone };