// Function to demonstrate waiting for something
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
const asyncBasic = async (message, time) => {
  let result = await mockCall(message, time);
  console.log(result);
}

// asyncBasic("Basic async-await", 60)

// Async-await with error handling

const asyncWError = async (message, time) => {
  try{
    let result = await mockCall(message, time);
    console.log(result);
  } catch (error) {
    console.log("Oops! We just got an error...");
  }
}

asyncWError("Async-await with error handling", 100)