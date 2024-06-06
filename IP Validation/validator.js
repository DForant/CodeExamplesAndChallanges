/******************************
 * IPv4 validator
 * Dean Forant - 06/06/2024
 * 
 * The isValidIPv4 function takes in a value that is
 * then checked via different logic to determine if the entered
 * value is a valid IPv4 address or not. 
 * Returns a boolean value
 ******************************/

function isValidIPv4(ipAddress) {
    // add each octet of the address to an array by using the split method.
    const octets = ipAddress.split('.');
    
    // If the length of the octets is not equal to 4, return false
    if (octets.length !== 4) {
      return false;
    }

    // Iterate through the octets array and check to ensure that the length of th octet is less that 4 
    // digits or if it only contains digits 0-9 if either of these tests fails then we return false
    octets.forEach((octet) => {
        if (!octet || octet.length > 3 || /^0\d+/.test(octet)) {
            return false;
        }
      
        // The final check makes sure that the octet value is in fact a number that is between 0 and 255
        // If not we return false
        const octetValue = parseInt(octet, 10);
        if (isNaN(octetValue) || octetValue < 0 || octetValue > 255) {
        return false;
        }
    });


    // The iP address that was entered survived all the above validations so we can return true
    return true;
}
  
  // Examples
//   console.log(isValidIPv4('1.2.3.4')); // true
//   console.log(isValidIPv4('123.45.67.89')); // true
//   console.log(isValidIPv4('1.2.3')); // false
//   console.log(isValidIPv4('1.2.3.4.5')); // false
//   console.log(isValidIPv4('123.456.78.90')); // false
//   console.log(isValidIPv4('123.045.067.089')); // false