let arr = []
let a = 33;

function cadenas(a) {
  arr.push(a)
  if (a === 1) {
    return 1;
  } else {
    for (let i = a - 1; i >= 1; i--) {
      if (a % i === 0) {
        return cadenas(i);
      }
    }
  }
  
}

cadenas(a);
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)
