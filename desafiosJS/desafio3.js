let resA = [];
let resB = [];

function divisores(n, n2){

  let x,x2;
  
  resA.push(n);
  resB.push(n2);
  //console.log(res);
 
  if(n == 1){
    //console.log(resA, resB);
    return true;
  } else {
  
  for(let i = 2; i <= n; i++){
    if(isPrime(i) && (n / i) % 1 === 0){
      x = n/i
    }
  }

  for(let i = n; i >= 0; i--){
    if(isPrime(i) && (n / i) % 1 === 0){
      x2 = n/i
    }
 }
    return divisores(x, x2)
}
}

function isPrime(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

divisores(6, 6);
let sumA = resA.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let sumB = resB.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumA, sumB)
