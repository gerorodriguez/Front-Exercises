import React from 'react'

const Counter = ({onIncrement, onDecrement, count}) => {



  return (
    <div>
        <h1>Counter</h1>
        <p>Count: {count} </p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
  )
}

export default Counter