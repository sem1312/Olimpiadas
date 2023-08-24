function solveMaze(maze, row, col) {
    const numRows = maze.length;
    const numCols = maze[0].length;

 
    //Casos base
    //fuera del laberinto y obstaculos
    if (row < 0 || row >= numRows || col < 0 || col >= numCols || maze[row][col] === '#' || maze[row][col] === '+') {
        return false;
    }

    //si llega al final
    if (maze[row][col] === 'G') {
        console.log(maze);
      //esteke
        return maze;
    }

    //la marca como visitada
    maze[row][col] = '+';

    //movimiento
    if (solveMaze(maze, row, col - 1)) {
        return true;
    } //Norte
    if (solveMaze(maze, row + 1, col)) {
        return true;
    } //Oeste
    if ( solveMaze(maze, row, col + 1)) {
        return true;
    } //Sur
    if (  solveMaze(maze, row - 1, col)) {
        return true;
    } //Este

    //backtracking
    maze[row][col] = ' ';
 
    return false;
}


const maze = [
    ['S', ' ', ' ', ' ', ' '],
    ['#', '#', '#', '#', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', '#', '#', '#', '#'],
    [' ', ' ', ' ', ' ', 'G']
];

console.log(solveMaze(maze, 0, 0))