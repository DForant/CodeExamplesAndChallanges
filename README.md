# Code Examples And Challanges

This is a collection of different code examples I've codded. Some were for fun others were for coding challanges
## Caesar Cypher 
  
  This javascript function will encode or decode a message using the caesar cypher. This is done by shifting forward in the alphabet by the specified shift number provided with the string to encode. It can thenbe decoded using the same shift number but as a negative number. 
  
  Example Usage: 
  
  Encode message
  ```
  caesarCipher('Hello World.', 3); // Encode with a right shift of 3 
  console.log(encodedMessage); // 'Khoor Zruog'
  ```

  Decode message
  ```
  caesarCipher('Hello World.', 3); // Encode with a right shift of 3 
  console.log(encodedMessage); // 'Hello World'

  ```

## IPv4 Validator

The IPv4 validaor takes in a input from a form and checks to make sure that it is a valid IPv4 address
(In format only) 

Example Use:

```
    console.log(isValidIPv4('1.2.3.4')); // true
    console.log(isValidIPv4('123.45.67.89')); // true
    console.log(isValidIPv4('1.2.3')); // false
    console.log(isValidIPv4('1.2.3.4.5')); // false
    console.log(isValidIPv4('123.456.78.90')); // false
    console.log(isValidIPv4('123.045.067.089')); //
```
  



