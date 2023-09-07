
function gravitas(g) {
  let n = g.length - 1;
  let aux = 0;

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < g[i].length; j++) {

        //fichas horizontales
          if ((g[i][j] === "<" && g[i][j + 1] === ">") && (g[i + 1][j] === "." && g[i + 1][j + 1] === ".")) {
              g[i][j] = ".";
              g[i][j + 1] = ".";
              g[i + 1][j] = "<";
              g[i + 1][j + 1] = ">";
              aux++;
            //fichas verticales
            }else if(i !== n && i !== n - 1){
              if ((g[i][j] === "A" && g[i + 1][j] === "V") && (g[i + 2][j] === ".")) {
              g[i][j] = ".";
              g[i + 1][j] = "A";
              g[i + 2][j] = "V";
              aux++;
            }
          }
      }
    }

  if (aux !== 0) {
      return gravitas(g);
  } else {
      return g;
  }

}

let g = [[".",".",".","<",">",".",".",".","."],
       ["<",">",".",".","<",">",".","A","."],
       [".",".","<",">",".","A",".","V","."],
       [".",".",".",".",".","V",".",".","."],
       [".","<",">",".",".",".",".",".","."]];


console.log(gravitas(g));