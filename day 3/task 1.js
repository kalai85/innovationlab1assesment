function greetUser(name, age) {
  return Hi ${name}, you are ${age} years old.;
} 

function multiplyAllArguments() {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}

function sumAllNumbers(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log(greetUser("kalai", 18));             
console.log(multiplyAllArguments(5, 10, 15));      
console.log(sumAllNumbers(5, 10, 15, 20));
