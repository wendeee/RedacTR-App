let inputText = document.querySelector('.textField');

let scrambleWord = document.querySelector('.scrambleWord');

let replaceWord = document.querySelector('.replaceWord');
let resultSec = document.querySelector('.result')

let resultArea = document.querySelector('.resultArea');

let redactBtn = document.querySelector('.redactBtn');

let timeResult = document.querySelector('.time');
let scannedword = document.querySelector('.scannedWord')



function redacTr(userInput, wordToScramble, replacerWord){
 const start = performance.now()
    userInput = (inputText.value);
    wordToScramble = scrambleWord.value
    let scannedWordCount = userInput.split(' ').length
    replacerWord = (replaceWord.value) ;

    wordToScramble = wordToScramble.split(', ');

    for(let i =0; i < wordToScramble.length; i++){
      let match = new RegExp(`(${wordToScramble[i]})`, 'gi')
      userInput = userInput.replaceAll(match, replacerWord ? replacerWord : hideWord)
    
      resultArea.textContent = userInput;


    
    }

    function hideWord(wordToScramble){
      if(wordToScramble.length > 0){
        return wordToScramble.substring(0,0) + "*".repeat(wordToScramble.length )
      }
      
    }
    
   const time = (performance.now() - start)
  
    redactBtn.addEventListener('click', () => {
      resultSec.style.display = 'block'
      timeResult.textContent = `Time: ${time}ms`
      scannedword.textContent = `ScrambledWordCount: ${scannedWordCount}`
      
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