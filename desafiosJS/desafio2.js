function isEscalonado(n){
  //separa el numero en un arr de cada digito separado
  let numArr = String(n).split('').map(Number);
  for (let j = 1; j < numArr.length; j++) {
      if (numArr[j] <= numArr[j - 1]) {
        return false;
      }
    }
  return true;
}

function escalonados(N) {
  let cont = 0;
  let test = [];
  
  for (let i = 10; i <= N; i++) {
    if (isEscalonado(i)) {
      cont++;
      test.push(i);
    }
  }
  console.log(test)
  return cont;
}

console.log(escalonados(14));
