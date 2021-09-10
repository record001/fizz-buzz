let number = Number(prompt("Enter the number :"));

function FizzBuzz(take_number) {
  if (!isNaN(take_number)) {
    if (take_number % 3 === 0 && take_number % 5 === 0) {
      return "FizzBuzz";
    } else if (take_number % 3 === 0) {
      return "Fizz";
    } else if (take_number % 5 === 0) {
      return "Buzz";
    } else {
      return take_number
    }
  } else {
    return ("Please, enter a number !");
  }
}

alert(FizzBuzz(number))

