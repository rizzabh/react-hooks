import React, { useState, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const TodoItem = ({ id, text, onDelete }) => {
  return (
    <div>
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

const UseCallback = () => {
  const [code, setCode] = useState(false);
  const codestring = `
import React, { useState, useCallback } from 'react';

const TodoItem = ({ id, text, onDelete }) => {
  return (
    <div>
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Todo 1' },
    { id: 2, text: 'Todo 2' },
    { id: 3, text: 'Todo 3' }
  ]);

  // Memoize the delete handler function using useCallback
  const handleDelete = useCallback((idToDelete) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== idToDelete));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TodoList;

`;
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo 1" },
    { id: 2, text: "Todo 2" },
    { id: 3, text: "Todo 3" },
  ]);

  // Memoize the delete handler function using useCallback
  const handleDelete = useCallback((idToDelete) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== idToDelete));
  }, []);
  return (
    <div>
      <div className="card">
        <h1>useCallback</h1>
        <p>
          So just like how useMemo is used to memoize the states, useCallback is
          used to memoize functions (callback functions), Let us understand with
          an example of a todolist
        </p>
        <p className="subtext">
          In this example we will memoize the Delete function of a todolist so
          that it does not re-render the whole list:
        </p>
        <div>
          <div>
            <h2>Todo List</h2>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
        <button
          className="refresh"
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </button>
        <button
          onClick={() => {
            setCode(!code);
          }}
        >
          {code ? "Hide Code -" : "View Code +"}
        </button>
        {code && (
          <SyntaxHighlighter language="javascript" className="codesnippet">
            {codestring}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};

export default UseCallback;
