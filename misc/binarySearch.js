function binarySearch(arr0,n){

  let arr = arr0.sort((a, b) => { return a - b });
  
  let median = parseInt(arr.length / 2);
  //console.log(median);

  if(arr[median] === n){
    return true;
    
  } else if(arr[median] > n){
    //izquierda
    let newArrLeft = arr.slice(0, median)
    //console.log(newArrLeft)
    return binarySearch(newArrLeft, n);
    
  }else{
    //derecha
    let newArrRight = arr.slice(median)
    //console.log(newArrRight)
    return binarySearch(newArrRight, n);
    
  }
}

//console.log(arr);
console.log(binarySearch([2,16,254,27,83,36,41],27));