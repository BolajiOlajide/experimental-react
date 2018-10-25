import React, { useState, memo } from 'react';


function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  console.log('rendering counter ===>');

  return <button onClick={increment}>{count}</button>
};

export default memo(Counter);
