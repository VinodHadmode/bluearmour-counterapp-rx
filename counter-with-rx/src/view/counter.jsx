import React, { useEffect, useState } from 'react';
import { onIncrement, onDecrement, onReset, onToggleAutoIncrement } from '../intent/counterIntent';
import { count$, autoIncrementEnabled$ } from '../model/counterModel';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isAutoIncrementEnabled, setAutoIncrementState] = useState(false);

  useEffect(() => {
    const countSubscription = count$.subscribe(setCount);
    const autoIncrementStateSubscription = autoIncrementEnabled$.subscribe(setAutoIncrementState);

    // Cleanup on unmount
    return () => {
      countSubscription.unsubscribe();
      autoIncrementStateSubscription.unsubscribe();
    };
  }, []);

  // Handle toggle for auto increment
  const handleToggleAutoIncrement = () => {
    onToggleAutoIncrement(isAutoIncrementEnabled);  
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Counter App</h1>
        <div className="text-4xl font-semibold mb-4">{count}</div>

        <div className="flex space-x-4 mb-4">
          <button onClick={onIncrement} className="px-4 py-2 bg-blue-500 text-white rounded">+</button>
          <button onClick={onDecrement} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
        </div>

        <div className="mb-4">
          <button onClick={onReset} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
        </div>

        <div>
          <button onClick={handleToggleAutoIncrement} 
                  className={`px-4 py-2 ${isAutoIncrementEnabled ? 'bg-green-500' : 'bg-yellow-500'} text-white rounded`}>
            {isAutoIncrementEnabled ? 'Disable Auto Increment' : 'Enable Auto Increment'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
