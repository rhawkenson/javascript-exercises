const reverseString = function(text) {
    let string ='';
    for (let i=text.length-1; i>=0; i--){
        string += text.charAt([i]);
    } return string;
}

module.exports = reverseString
