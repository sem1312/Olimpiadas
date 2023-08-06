let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let aux = 0;
let res = [];

//inputs:
let key = [2, 3];
let n = key.length;
let prompt0 = "YO HE LOGRADO ENCENDER UNA CERILLA";

let prompt = prompt0.toUpperCase().replace(/\s/g, '');

for (let i = 0; i < prompt.length; i++) {

  if(aux === n){
    aux = 0
  }

  let letraIndex = abc.indexOf(prompt[i]);
  let decryptedIndex = (letraIndex + key[aux]) % abc.length;
  res.push(abc[decryptedIndex]);

  if (aux < n) {
    aux++;
 }
}

console.log(res.join(''), key.length);

//output:          ARJHNRIUCGQHPFGQFHTXPDEHTLNOC
//expected output: ARJHNRIUCGQHPFGQFHTXPDEHTLNOC