let defaultState = [
    {
        id: 1,
        name: 'First Item',
        description: 'First item description...',
        isDone: false
    },
    {
        id: 2,
        name: 'Second Item',
        description: 'Second item description...',
        isDone: true
    },
    {
        id: 3,
        name: 'Third Item',
        description: 'Third item description...',
        isDone: false
    }
];

const todoListReducer = function(currentState=defaultState, action){
    if(action.type === 'ADD'){
        let newItem = action.payload;
        newItem.id = currentState.length+1;
        return [...currentState, newItem];
    }
    if(action.type === 'MARK_AS_DONE'){
        let inputItem = action.payload;
        let items = currentState.map((item, index) => {
            if(!item.isDone && (item.id === inputItem.id)) item = inputItem;
            return item;
        });
        return items;
    }
    if(action.type === 'MARK_AS_UNDONE'){
        let inputItem = action.payload;
        let items = currentState.map((item, index) => {
            if(item.isDone && (item.id === inputItem.id)) item = inputItem;
            return item;
        });
        return items;
    }
    return currentState;
}

export default todoListReducer;