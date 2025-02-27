var a5_to_a8 = function (input) {
  const inputLength = input.length;
  let indeks = 0;
  let output = '';
  let curr_char = ''; let prev_char = '';
  while (indeks < inputLength) {
    prev_char = curr_char;
    curr_char = input[indeks].toLowerCase();
    switch (curr_char) {
      case 'f':  output += 'ph'; break;
      case 'j':  output += 'z'; break;
      case 'q':  output += 'k'; break;
      case 'x':  output += 'X'; break;        
      case 'w': if('o' == prev_char) { output += 'u'; } else { output += 'v'; } break;
      case ':':  output += 'A'; break;    // :;<=>? => ABCDEF    
      case ';':  output += 'B'; break;
      case '<':  output += 'C'; break;  
      case '=':  output += 'D'; break;
      case '>':  output += 'E'; break;
      case '?':  output += 'F'; break;
      default: output += curr_char ;
    }
    indeks++ ;
  }
  return output;
}
module.exports = a5_to_a8
