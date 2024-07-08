import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../storee/todoSlice';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text }
            <button onClick={() => handleRemoveTodo(todo.id)} className='btn'> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
