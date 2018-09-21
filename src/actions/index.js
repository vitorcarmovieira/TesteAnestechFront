const get_todos = function() {
    return function(dispatch) {
      return fetch("https://TesteAnestech--vitorcarmovieir.repl.co/todos")
        .then(response =>
          response.json().then(todos => dispatch(get_todos_success(todos)))
        )
        .catch(error => dispatch(todos_error(error)));
    };
  };
  
  const get_todos_success = function(todos) {
    return {
      type: "GET_TODOS_SUCCESS",
      todos
    };
  };
  
  const todos_error = function(error) {
    return {
      type: "TODOS_ERROR",
      error
    };
  };
  
  const close_todo = function(todoId) {
    return function(dispatch) {
      return fetch(
        `https://TesteAnestech--vitorcarmovieir.repl.co/todos/${todoId}`,
        {
          method: "PATCH"
        }
      )
        .then(response => response.json().then(() => dispatch(get_todos())))
        .catch(error => dispatch(todos_error(error)));
    };
  };
  
  const create_todo = function(text) {
    return function(dispatch) {
      return fetch(`https://TesteAnestech--vitorcarmovieir.repl.co/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          description: text
        })
      })
        .then(response => {
          console.log(response);
          dispatch(get_todos());
        })
        .catch(error => dispatch(todos_error(error)));
    };
  };
  
  export default {
    get_todos,
    get_todos_success,
    todos_error,
    close_todo,
    create_todo
  };
  