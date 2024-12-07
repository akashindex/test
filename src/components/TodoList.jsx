import React, { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Text</button>
      {isVisible && <p>This is the toggled text!</p>}
    </div>
  );
}

function TodoList({ items }) {
  if (items.length === 0) {
    return <p>No items available</p>;
  }

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <ToggleText />
    </div>
  );
}

export default TodoList;