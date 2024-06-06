function fizzBuzz(arr){

    arr.forEach(item => {
        if(item % 10 === 0) {
            console.log(`${item} - Fizz`);
        }
        else if(item % 5 === 0) {
            console.log(`${item} - Buzz`);
        }
        else{
            console.log(`${item} FizzBuzz`);
        }
    });
  }
  
  fizzBuzz([4,24,10,20,35,763]);