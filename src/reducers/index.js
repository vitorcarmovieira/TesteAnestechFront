const initialState = {
    todos: [],
    error: undefined
};

export default function(state = initialState, action) {
console.log(action);
switch (action.type) {
    case "GET_TODOS_SUCCESS":
    return {
        todos: action.todos.reverse()
    };
    case "TODOS_ERROR":
    return {
        error: action.error
    };
    default:
    return state;
}
}
