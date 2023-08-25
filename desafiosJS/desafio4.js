let N = 3;
let M = 5;
let grilla = [[2,4,5],
              [3,0,4],
              [2,4,5],
              [0,4,5],
              [1,1,4]];
let res;

function comodines(grilla){
  for(let i = 0; i < grilla.length;i++){
    for(let j = 0; j < grilla[i].length;i++){
      if(grilla[i++][j] === grilla[i][j] || grilla[i--][j] === grilla[i][j] || grilla[i][j++] === grilla[i][j] || grilla[i][j--] === grilla[i][j] || grilla[i++][j] === 0 || grilla[i--][j] 0 || grilla[i][j++] === 0 || grilla[i][j--] === 0){
        res++;
      }
    }
  }
  return res;
}