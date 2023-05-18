import React, { useState } from "react";
import Counter from "./Counter";

const ParentCounter = () => {
  const [count, setCount] = useState(0);

  const handleCountIncrement = () => {
    setCount(count + 1);
  };

  const handleCountDecrement = () => {
    setCount(count - 1);
    {
      count === 0 ? alert("No se puede restar más") : setCount(count - 1);
    }
  };
  return (
    <div>
      <Counter
        count={count}
        onIncrement={handleCountIncrement}
        onDecrement={handleCountDecrement}
      />
    </div>
  );
};

export default ParentCounter;
