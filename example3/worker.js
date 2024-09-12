self.onmessage= function(e){
   const number = e.data;
   const result = number * number
   self.postMessage(result)
}