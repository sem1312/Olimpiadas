let res = [];

function divisores(n){
 
  res.push(n);
  //console.log(res);
 
  if(n == 1){
    return res;
  } else {

  //aca esta para ver el menor y mayor resultado, nose como implementarlos los 2 al mismo tiempo por ahora estekeeeee
  for(let i = n; i >= 0; i--){
  //for(let i = 2; i <= n; i++){
    if(isPrime(i) && (n / i) % 1 === 0){
      let x = n/i
      return divisores(x)
    }
  }
 }
}

function isPrime(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

divisores(6);
let sum = res.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)
