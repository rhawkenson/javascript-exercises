const repeatString = function(text, num){
    let string ='';
    if (num < 0 ){
        string += 'ERROR';
    } else {
        for (let i=0; i<num; i++){
            string += text;
        } 
    }return string;
}

module.exports = repeatString
