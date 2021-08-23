import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  const plus = () => setValue(value + 1);
  const minus = () => setValue(value - 1);
    
  return (
    <div>
      <h1>값 : {value}</h1>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  )
}

export default Counter;