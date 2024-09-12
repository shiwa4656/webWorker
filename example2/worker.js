self.onmessage = function(e){
    const data = e.data

    if(data.operation ==='sum'){
        const result = data.numbers.reduce((a,b)=> a +b, 0);
        self.postMessage(result)
    }
}

