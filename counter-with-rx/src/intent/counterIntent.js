import { increment, decrement, reset, enableAutoIncrement, disableAutoIncrement } from '../model/counterModel';

// Function to handle increment action
export function onIncrement() {
  increment(); 
}

// Function to handle decrement action
export function onDecrement() {
  decrement(); 
}

// Function to handle reset action
export function onReset() {
  reset(); 
}

// Function to toggle auto increment
export function onToggleAutoIncrement(isAutoIncrementEnabled) {
  if (isAutoIncrementEnabled) {
    disableAutoIncrement(); 
  } else {
    enableAutoIncrement(); 
  }
}
