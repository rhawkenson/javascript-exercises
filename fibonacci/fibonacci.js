const fibonacci = function(num) {
    let current = 0;
    let newNum = 1;
    let resultsArr = [1];
    
    if (!Number(num) || num < 0){
        return 'OOPS';
    
    } else {
        for (let i=0; i<=num; i++){
        let value = current + newNum;
        resultsArr.push(value);
        current = newNum;
        newNum = value;
        
        } 
    }return resultsArr[num-1];
}

module.exports = fibonacci

//       jasmine fibonacci.spec.js