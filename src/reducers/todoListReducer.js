let defaultState = [
    {
        id: 1,
        name: 'First Item',
        description: 'First item description...',
        isDone: false,
        isActive: true
    },
    {
        id: 2,
        name: 'Second Item',
        description: 'Second item description...',
        isDone: true,
        isActive: false
    },
    {
        id: 3,
        name: 'Third Item',
        description: 'Third item description...',
        isDone: false,
        isActive: false
    }
];

const todoListReducer = function(currentState=defaultState, action){
    if(action.name === ''){
    }
    return currentState;
}

export default todoListReducer;