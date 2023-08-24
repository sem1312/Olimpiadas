let resA = [];
let resB = [];

function divisores(n, n2, i, i2) {
  console.log(n,n2)
 

  let x, x2;

  if (n === 1 || n2 === 1 || i >= n || i2 <= 0) {
    return;
  } else if (isPrime(i) && n % i === 0 && isPrime(i2) && n2 % i2 === 0){
    x = n / i;
    x2 = n2 / i2;
    resA.push(x);
    resB.push(x2);
    return 1 + divisores(x, x2, i + 1, i2 - 1);
  } else {
    return 1 + divisores(n, n2, i + 1, i2 - 1);
  }
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let num = 6;
console.log(divisores(num, num, 2, num));
console.log("ResA:", resA);
console.log("ResB:", resB);
