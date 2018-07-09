let menuItems = [
    {
        key: 'list',
        label: 'List'
    },
    {
        key: 'add',
        label: 'Add New'
    },
    {
        key: 'manage',
        label: 'Manage'
    }
];

function mainMenuReducer(currentState=menuItems) {
    return currentState;
}

export default mainMenuReducer;