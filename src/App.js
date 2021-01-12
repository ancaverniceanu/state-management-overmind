import React, { useState } from 'react';
import { useOvermind } from './overmind';

const App = () => {
  const {
    state,
    actions: { addTodo, removeTodo },
  } = useOvermind();
  const { todos } = state;
  const [todo, setTodo] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" disabled={!todo}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo} - <button onClick={() => removeTodo(i)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
