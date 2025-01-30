import { increment, decrement, reset, enableAutoIncrement, disableAutoIncrement } from '../model/counterModel';

export function onIncrement() {
  increment(); 
}

export function onDecrement() {
  decrement(); 
}

export function onReset() {
  reset(); 
}

export function onToggleAutoIncrement(isAutoIncrementEnabled) {
  if (isAutoIncrementEnabled) {
    disableAutoIncrement(); 
  } else {
    enableAutoIncrement(); 
  }
}
