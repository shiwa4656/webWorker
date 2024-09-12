 const myWorker = new Worker('./worker.js');

 myWorker.postMessage(25);
  myWorker.onmessage = function(e){
    console.log('result from worker : ' ,e.data);
    myWorker.terminate()
  }