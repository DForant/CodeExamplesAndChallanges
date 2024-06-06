/******************************
 * IPv4 validator
 * Dean Forant - 06/06/2024
 * 
 * The isValidIPv4 function takes in a value that is
 * then checked via different logic to determine if the entered
 * value is a valid IPv4 address or not. 
 * Returns a boolean value.
 */

function isValidIPv4(ipAddress) {
    const octets = ipAddress.split('.');
    
    if (octets.length !== 4) {
      return false;
    }
  
    for (let i = 0; i < octets.length; i++) {
      const octet = octets[i];
      
      if (!octet || octet.length > 3 || /^0\d+/.test(octet)) {
        return false;
      }
  
      const octetValue = parseInt(octet, 10);
      if (isNaN(octetValue) || octetValue < 0 || octetValue > 255) {
        return false;
      }
    }
  
    return true;
  }
  
  // Examples
  console.log(isValidIPv4('1.2.3.4')); // true
  console.log(isValidIPv4('123.45.67.89')); // true
  console.log(isValidIPv4('1.2.3')); // false
  console.log(isValidIPv4('1.2.3.4.5')); // false
  console.log(isValidIPv4('123.456.78.90')); // false
  console.log(isValidIPv4('123.045.067.089')); //