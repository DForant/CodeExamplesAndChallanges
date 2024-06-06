/******************************
 * IPv4 validator
 * Dean Forant - 06/05/2024
 * 
 * The Caesar Cypher is not a very secure cipher but it is a fun project to do with Javascript
 * To encode a message we pass in a string and a positive shift number. The shift number is used to shift
 * the starting pont in the aphabet when encoding the message. for example a shift of 1 would cause the 
 * cypher to start at the 3rd position in the alphabet. Eg A would become D, and B would become E.
 * So a encoded message 'Hello World' would be encoded to 'Khoor Zruog' (Which kinda sounds like Klingon to me :) )
 * Additionally, we can decode a message using the same shift number that was used to encode it but insted put it
 * as a negative number 
 ******************************/
function caesarCipher(str, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    shift = shift % 26; // The modulo ensures the shift wraps around the alphabet

    const encodeDecode = (char, shift) => {
        if (!alphabet.includes(char.toUpperCase())) return char;
        let index = alphabet.indexOf(char.toUpperCase());
        index = (index + shift + 26) % 26; // Use modulo to wrap the index if it goes beyond 25
        return char === char.toUpperCase() ? alphabet[index] : alphabet[index].toLowerCase();
    };

    return str.split('').map(char => encodeDecode(char, shift)).join('');
} 
  
// Usage: 
// To encode a message you add the string 
const encodedMessage = caesarCipher('Hello World.', 3); // Encode with a right shift of 3
console.log(encodedMessage); // 'Khoor Zruog'

const decodedMessage = caesarCipher(encodedMessage, -3

); // Decode with a left shift of 3 (or -3)
console.log(decodedMessage); // 'Hello World'

// here are some "Top secret" messages to decode.
const decodedMessage1 = caesarCipher('Nq egdq fa pduzw kagd Ahmxfuzq.', -12)
console.log(decodedMessage1); 

const decodedMessage2 = caesarCipher('Cnaapejco Lnkbaookn Bwhgaj. Skqhz ukq hega pk lhwu w cwia?', -22);
console.log(decodedMessage2);