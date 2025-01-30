import { BehaviorSubject } from 'rxjs';

const countSubject = new BehaviorSubject(0); 
const autoIncrementEnabledSubject = new BehaviorSubject(false); 

// Function to increment the count
export function increment() {
  const currentCount = countSubject.getValue();
  if (currentCount < 98) {
    countSubject.next(currentCount + 1);
  }
}

// Function to decrement the count
export function decrement() {
  const currentCount = countSubject.getValue();
  if (currentCount > 0) {
    countSubject.next(currentCount - 1);
  }
}

// Function to reset the count
export function reset() {
  countSubject.next(0);
}

// Auto increment interval variable
let autoIncrementInterval = null;

// Function to enable auto increment
export function enableAutoIncrement() {
  if (autoIncrementInterval) return;

  autoIncrementEnabledSubject.next(true);
  
  autoIncrementInterval = setInterval(() => {
    const currentCount = countSubject.getValue();
    if (currentCount < 98) {
      countSubject.next(currentCount + 1); 
    }
  }, 1100); 
}

// Function to disable auto increment
export function disableAutoIncrement() {
  clearInterval(autoIncrementInterval);
  autoIncrementInterval = null;
  autoIncrementEnabledSubject.next(false);
}

//observable
export const count$ = countSubject.asObservable();

export const autoIncrementEnabled$ = autoIncrementEnabledSubject.asObservable();
