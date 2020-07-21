const palindromes = function(str) {
    let re = /[\W_]/g;
    let editStr = str.toLowerCase().replace(re, '');
    let reverseString = editStr.split('').reverse().join('');
    return reverseString === editStr;
}

module.exports = palindromes
