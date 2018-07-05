let defaultState = [
    {
        name: 'First Item',
        description: 'First item description...',
        isDone: false
    },
    {
        name: 'Second Item',
        description: 'Second item description...',
        isDone: true
    },
    {
        name: 'Third Item',
        description: 'Third item description...',
        isDone: false
    }
];

const todoListReducer = function(currentState=defaultState, action){
    if(action.name === ''){
    }
    return currentState;
}

export default todoListReducer;