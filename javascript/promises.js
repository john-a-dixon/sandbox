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
mockCall("Basic Promise", 300).then(onResolve, onReject);

// Basic promise with .Catch
mockCall("Basic Promise with .catch", 100)
  .then(onResolve)
  .catch(onReject);

// Chained promise
mockCall("Chained Promises", 200)
  .then(resolved => mockCall(resolved, 150))
  .then(resolved => mockCall(resolved, 100))
  .then(onResolve)
  .catch(onReject);

// Promise all
let promises = [];