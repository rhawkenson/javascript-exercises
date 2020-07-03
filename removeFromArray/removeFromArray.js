const removeFromArray = function (...args) {
    const newArray = args[0];
    const finalArray = [];
    newArray.forEach((item) => {
        if (!args.includes(item)) {
        finalArray.push(item);
        }
    }); 
    return finalArray;
  };

module.exports = removeFromArray
  

//removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]