let inputText = document.querySelector('.textField');

let scrambleWord = document.querySelector('.scrambleWord');

let replaceWord = document.querySelector('.replaceWord');
let resultSec = document.querySelector('.result')

let resultArea = document.querySelector('.resultArea');

let redactBtn = document.querySelector('.redactBtn');



function redacTr(userInput, wordToScramble, newWord){
    userInput = (inputText.value);
    wordToScramble = scrambleWord.value
    newWord = (replaceWord.value) || "***";
    
    
    let wordInToArray = userInput.split(/\s/)
    wordInToArray = wordInToArray.map((item) => {
      return item == wordToScramble ? newWord : item ;
    }) 
    resultArea.textContent = (wordInToArray.join(' '))
    redactBtn.addEventListener('click', () => {
        resultSec.style.display = 'block'
    })
    
 }
 
 redacTr()
 






































// function scanInputText(text, word){
// /*
// This function will search through the entered text
// to see if the word to scramble is present in the 
// original text.
// if present, it will carry out another function on the text.
// this second function will replace the scramble word with asterisk and output the final result.

// */

//     text = inputText.value;
//     word = scrambleWord.value;

//     if (text.includes(word)){
//         class RegExp1 extends RegExp {
//             [Symbol.replace](str) {
//                 return RegExp.prototype[Symbol.replace].call(this, str, '****');
//            } }
             
//     }
//     return text.replace(new RegExp1(word))

// }

// function replaceWord(){
//     let output = document.querySelector('.para');
//     redactBtn.addEventListener('click', () => {
//     output.textContent = ;
//    })
// }