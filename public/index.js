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
 




























