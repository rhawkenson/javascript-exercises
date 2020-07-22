
const caesar = function(msg, key) {
    let codedMsg = '';
    for(let i=0; i<msg.length; i++){
        let code = msg.charCodeAt(i);
        let newLetter = '';
        
        if(code >= 65 && code <= 90){
            if (code + key > 90){
                code -= 65;
                code = ((code + key)% 26);
                code += 65;
                codedMsg += String.fromCharCode(code);
            } else{
                newLetter = String.fromCharCode(code + key);
                codedMsg += newLetter;
            }
        } else if(code >= 97 && code <=122){
                if (code + key > 122){
                    code -= 122;
                    code = ((code + key) % 26);
                    code += 122;
                    codedMsg += String.fromCharCode(code);  
                }else {
                    newLetter = String.fromCharCode(code + key);
                    codedMsg += newLetter;
                }
                
        } else {
            codedMsg += msg[i];

        } 

const codeSet = code => (code < 97 ? 65 : 97);
const mod = (n, m) => (n % m + m) % m;
const shiftChar = (char, shift) => {
    const code = char.charCodeAt();
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      return String.fromCharCode(
        mod(code + shift - codeSet(code), 26) + codeSet(code)
    }return codedMsg;
}



module.exports = caesar


//       jasmine caesar.spec.js
