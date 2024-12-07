import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList'; 
import ToggleText from './components/Toogle';

function App() {

  
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList items={todos} />
    </div>
  );
}

export default App;