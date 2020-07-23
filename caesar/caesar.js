
const caesar = function(msg, key) {
    let results = '';
    for (let i=0; i<msg.length; i++){ 
        let value = msg.charCodeAt(i);

        if(value >= 65 && value <= 90){
            let alphaValue = value - 64;
            if((alphaValue + key) > 26){ 
                newLetter = ((key%26)-(26-alphaValue));
                results += String.fromCharCode(newLetter + 64);

            } else if((alphaValue + key) < 0) {
                newLetter = ((26+alphaValue)+(key%26))%26;
                results += String.fromCharCode(newLetter + 64);
            } else {
                let newCode = value + key;
                results += String.fromCharCode(newCode);
            }

        } else if (value >= 97 && value <= 122){
            let alphaValue = value - 96;
            if((alphaValue + key) > 26){
                newLetter = ((key%26)-(26-alphaValue));
                results += String.fromCharCode(newLetter + 96);
                
            } else if((alphaValue + key) < 0) {
                    newLetter = ((26+alphaValue)+(key%26))%26;
                    results += String.fromCharCode(newLetter + 96);
            } else {
                let newCode = value + key;
                results += String.fromCharCode(newCode);
            }
        } else {
            results += String.fromCharCode(value);
        }
    } return results;

}



module.exports = caesar


//       jasmine caesar.spec.js

