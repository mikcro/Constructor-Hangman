var prompt = require("prompt");
prompt.start();

var Word = require("./word.js");

var game = {
  wordBank: ["Sophia","Sam","Nabiya","Whittaker","Brennan","Brian","James","Josh","Mike","Setu",],
  guessesRemaining : 10,
  currentWord : null,
  startGame : function(word){
    var randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    console.log(randomWord); // Comment out after testing
    this.currentWord = new Word(randomWord);
    this.currentWord.getLetters();
    this.keepPrompting(); 
  },

  
  keepPrompting: function() {
    var self = this;
    prompt.get(["guessLetter"], function(err, result) {
      console.log("The Letter you guessed is : "+result.guessLetter);
      var findHowManyOfUserGuess = self.currentWord.checkIfLetterFound(result.guessLetter);

      console.log("LetterWasFound!!!!!!!!!!"+findHowManyOfUserGuess);
      console.log("self.currentWord.didWeFindTheWord-----------------", self.currentWord.didWeFindTheWord())
      
      if(findHowManyOfUserGuess === 0) {
        console.log("Wrong Guesses~!");
        self.guessesRemaining -= 1;        
      } else {
        console.log("Correct!");
      if (self.currentWord.didWeFindTheWord()) {
          // console.log("You Won!!!");
          return 1;
      }
      else {
        console.log("Guesses remaining:"+ self.guessesRemaining);
        console.log(self.currentWord.wordRender());
        if (self.guessesRemaining > 0 && self.currentWord.found === false){
          self.keepPrompting();
      } 
      else {
      if (self.guessesRemaining === 0){
        console.log("Game Over"); 
        console.log("The word you were guessing was:"+self.randomWord);
      }
      else {
              console.log(self.currentWord.wordRender());
            }
          }
        }
      }
    });
  }
}
game.startGame();


