// src/view/counter.js
import React, { useEffect, useState } from 'react';
import { onIncrement, onDecrement, onReset, onToggleAutoIncrement } from '../intent/counterIntent';
import { count$, autoIncrementEnabled$ } from '../model/counterModel';
import { LuRefreshCw } from 'react-icons/lu';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isAutoIncrementEnabled, setAutoIncrementState] = useState(false);

  useEffect(() => {
    // Subscribe to the count observable to update the count
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
    onToggleAutoIncrement(isAutoIncrementEnabled);  // Pass current state directly
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen bg-white">

      <p className="text-6xl text-black font-bold mb-10">{count}</p>

      <div className="flex space-x-6 gap-10">
        <button
          onClick={onIncrement}
          className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 text-black text-3xl font-semibold shadow-md hover:bg-gray-300 transition"
        >
          +
        </button>
        <button
          onClick={onReset}
          className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 text-black text-3xl font-semibold shadow-md hover:bg-gray-300 transition"
        >
          <LuRefreshCw size={25} />
        </button>

        <button
          onClick={onDecrement}
          className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 text-black text-3xl font-semibold shadow-md hover:bg-gray-300 transition"
        >
          -
        </button>
      </div>

      <div className="flex items-center space-x-5 gap-10">
        <p className="text-lg text-black">Auto Increment</p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isAutoIncrementEnabled}
            onChange={handleToggleAutoIncrement}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-500 rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};

export default Counter;
