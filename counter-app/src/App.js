import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 25) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{padding: "20px" }}>
      <h3>Counter: {count}</h3>
      <button onClick={decrement} style={{ marginRight: '10px' }}>- Decrement</button>
      <button onClick={increment}>+ Increment</button>
    </div>
  );
};

export default Counter;
