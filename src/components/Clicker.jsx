import React from 'react';

const Clicker = () => {
    let [count, setCount] = useState(0)
    
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};

export default Clicker;