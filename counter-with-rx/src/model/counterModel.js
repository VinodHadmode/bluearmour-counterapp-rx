import { BehaviorSubject } from 'rxjs';

const countSubject = new BehaviorSubject(0); 
const autoIncrementEnabledSubject = new BehaviorSubject(false); 

export function increment() {
  const currentCount = countSubject.getValue();
  if (currentCount < 98) {
    countSubject.next(currentCount + 1);
  }
}

export function decrement() {
  const currentCount = countSubject.getValue();
  if (currentCount > 0) {
    countSubject.next(currentCount - 1);
  }
}

export function reset() {
  countSubject.next(0);
}

let autoIncrementInterval = null;

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

export function disableAutoIncrement() {
  clearInterval(autoIncrementInterval);
  autoIncrementInterval = null;
  autoIncrementEnabledSubject.next(false);
}

export const count$ = countSubject.asObservable();

export const autoIncrementEnabled$ = autoIncrementEnabledSubject.asObservable();
