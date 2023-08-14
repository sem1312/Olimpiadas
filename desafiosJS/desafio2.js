let N = 14;
let res = 0;

for(let i=10; i<=N; i++){
    let str = i.toString()
    for(let j=0; j<str.length; j++){
        if(str[j] < str[j+1]){
            res++;
        }
    }
}

console.log(res);