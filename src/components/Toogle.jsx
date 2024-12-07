import React, { useState } from 'react'; // Add useState to the import statement

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
export default ToggleText;