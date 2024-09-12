// main.js

// Create a new Worker instance
const myWorker = new Worker('worker.js');

// Send data to the Worker
myWorker.postMessage(10);

// Listen for messages from the Worker
myWorker.onmessage = function (e) {
  console.log('Main thread received:', e.data);
};

// Terminate the Worker when it's no longer needed
// myWorker.terminate();