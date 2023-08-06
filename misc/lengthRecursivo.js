function count(prompt, i) {
  if (prompt[i] === undefined) {
    return 0;
  } else {
    return 1 + count(prompt,i + 1);
  }

}

console.log(count("hola",0))
