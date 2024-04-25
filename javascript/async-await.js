// This function uses the same functionality as the one in
// the native-promises.js file (also in comment below) but 
// using async-await.

const mockCall = (message, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randNum = Math.round(Math.random() * 1000);
      if (randNum % 2) {
        resolve(message + ": resolved")
      } else {
        reject(message + ": rejected")
      }
    }, time);
  });
};


// Basic async-await
