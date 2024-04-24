// Function to demonstrate promises
const mockCall = (message, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randNum = Math.round(Math.random() * 1000);
      if (randNum % 2) {
        resolve(message + ": resolved")
      } else {
        resolve(message + ": rejected")
      }
    }, time);
  });
};


// Success & Failure Handlers
const onResolve = resolved => console.log(resolved);
const onReject = rejected => console.log(rejected);

// Basic promise
mockCall("Basic Promise", 200).then(onResolve, onReject);

// Chained promise

// Promise all