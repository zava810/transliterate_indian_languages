# transliteration

a module to transliterate indian languages.

1. assami
1. bengali/bangla
2. oriya/odia
3. telugu
4. tamil
5. malayalam
6. kannada
7. marathi
8. guzrati
9. hindi
10. punzabi/gurumukhi
11. sanskrit

this module is used in the webextension:
1. [firefox addon ztr](//addons.mozilla.org/en-US/firefox/addon/ztr/).

### source code eksecution phlo

1. package.json -> main is called/run : ("main": "transliterator.js" , transliterator.js)
2. class transliterator
   1. transliterate_input(input_str,ztr_direction_const=0)
   2. transliterate_dom_node(node_arg, ztr_direction_const=0)
   3. untransliterate_dom_node()

ztr_direction_const values can be :
1. 0 for unicode to ascii510 (american standard code for information interchanze , 5+5=10)
2. 1 for unicode to hscii810 (heXadecimal standard code for information interchanze , 8+8=10=4*4)
3. 2 for ascii510 to hscii810
4. 3 for hscii810 to ascii510
5. 4 for style.textTransform = "uppercase"
6. 5 for style.textTransform = "lowercase"
7. 6 for style.textTransform = "initial"
8. 7 for style.textTransform = "none"
9. 8 for style.fontFamily = "hin54"

ascii510 : american standard code for information interchange
decimal digits : 0 1 2 3 4 5 6 7 8 9
5+5=10
alphabets : A-Z a-z q->k w->v j->z

hscii810 : heksadesiml standard kode for informesn interchenz
heksadesiml dizits : 0 1 2 3 4 5 6 7 8 9 L J Q W X F
8+8=10=vnti=4*4
alphabets : abcdefghiHklmopArstuvDTyz

### steps to clone , build , test & publish

1. git clone ... # this repozitri
2. change source(do not change version in package.json, npm version command in next step vill change version no) if needed
3. git commit & publish

  > git pull ; git add . ; git commit -am "some comments" ; git push

4. npm version patch
5. npm publish

### steps to use library

1. define **[ascii or hscii or code mapping][code_map_sheet]** as in ekzample zabc.js in this repository.
1. it is to define a dictionary vith keys as :

```js
1. import library as in your js file:

```js
import transliterator from 'kvz-transliteration';
const input_str = 'हिन्दी विकिपीडिया' ;
let t = new transliterator();

// ascii510 (q->k , w->v , j->z )
// ascii810 (q->A , w->D, j->H, x->T,)

///////// for transliterating zavaskript string input_str, kall as :

// 1. for unicode to ascii510
let transliterated_output_a5 = t.transliterate_input(input_str,0);
// or ve kan kall as :
let transliterated_output_a5 = t.transliterate_input(input_str) // 0 is default

// 2. for unicode to ascii810
let transliterated_output_a8 = t.transliterate_input(input_str,1)

// 3. for ascii510 to ascii810
let transliterated_output_a8 = t.transliterate_input(input_str,2)

// 4. for ascii810 to ascii510
let transliterated_output_a5 = t.transliterate_input(input_str,3)

///////// 5. for transliterating dom_tree_node kall as :
t.transliterate_dom_node(node_arg, ztr_direction_const);
// ztr_direction_const as in above transliterate_input calls 2nd argument

///////// 6. for untransliterating dom_tree_node kall as :
t.untransliterate_dom_node();

// definition of transliterate_input in libindik-transliteration:transliterator class is as:
  // transliterate_input(input_str,ztr_direction_const=0) {
  //   switch(ztr_direction_const) {
  //     case 0 : return u_to_a(input_str,false);
         // (u_to_a,false) means unicode to ascii510 (q->k , w->v , j->z )
         // international phonetics alphabets , texttospeech , reader
  //     case 1 : return u_to_a(input_str,true);
         // (u_to_a,true) means unicode to ascii810 (q->A , w->D, j->H, x->T,  )
         // international phonetics alphabets , texttospeech , reader
  //     case 2 : return a5_to_a8(input_str);
           // ascii510 (q->k , w->v , j->z )
           // ascii810 (q->A , w->D, j->H, x->T,)
  //     case 3 : return a8_to_a5(input_str);
           // ascii510 (q->k , w->v , j->z )
           // ascii810 (q->A , w->D, j->H, x->T,)
  //   }
  // }

```

1. mocha describe test

[code_map_sheet]: https://docs.google.com/spreadsheets/d/e/2PACX-1vRYY_On0oQlYqCH8KrAuNy9nxnUKRx9dG6UvjoZjbP1ZVeXX6VcHl-sU2yg9jbAFszCcNZ5STK47_rz/pubhtml
