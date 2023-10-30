const fizzBuzz = (numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) {
      return "FizzBuzz"
    } else if (numero % 3 === 0) {
      return "Fizz"
    } else if (numero % 5 === 0) {
      return "Buzz"
    } else {
      return numero.toString()
    }
  }
  console.log(fizzBuzz(9))
  console.log(fizzBuzz(10))
  console.log(fizzBuzz(15))
  console.log(fizzBuzz(7))