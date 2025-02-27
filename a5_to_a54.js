var a5_to_a54 = function (input) {
  const inputLength = input.length;
  let indeks = 0;
  let output = '';
  let curr_char = ''; let prev_char = '';
  while (indeks < inputLength) {
    prev_char = curr_char;
    curr_char = input[indeks];
    if ("ADHTN".indexOf(curr_char) == -1)
     {
      curr_char = curr_char.toLowerCase();
     }
    output += curr_char ;
    indeks++ ;
  }
  return output;
}
module.exports = a5_to_a54
