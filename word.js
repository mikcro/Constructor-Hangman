var letter = require("./letter.js");

function Word(word){
    this.word = word;
    this.letters = [];
    this.found = false;

    this.getLetters = function(){
      for (var i=0; i <this.word.length; i++){
        var newLetter = new letter(this.word[i]);
        this.letters.push(newLetter); //Creates each letter object
      }
    }

    this.checkIfLetterFound = function(guessLetter){
      var whatToReturn = 0;
      console.log("these are the letters to check",this.letters)
      for (var i=0; i <this.letters.length; i++){
        console.log("userGuess",guessLetter)
        console.log("this.letters[i]",this.letters[i])
        if(this.letters[i].charac === guessLetter) {
          console.log("YouGuessedRight!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
          this.letters[i].appear = true;
          ++whatToReturn;
          console.log("What to return"+whatToReturn);
          // return whatToReturn;
        }
      }
      return whatToReturn;
    }

    this.didWeFindTheWord = function(){
      var found = false;

      if (this.letters.every(checkAppearTrue)){
        found = true;
        return found;
      }

      function checkAppearTrue(value, index, ar){
        if (value.appear === true) {
          return true;
        } else {
          return false;
        }
      }
    }

    this.wordRender = function(){
      var str = "";
      for (var i=0; i <this.letters.length; i++){
        str += this.letters[i].LetterGen;
        console.log("test"+this.letters[i]);
        console.log("Inside word render :"+str);
        return str;
      }
    }
}
// var test = new Word('test');
// var x = test.getLets('test');
// var y = test.checkIfLetterFound("t");

module.exports = Word;
