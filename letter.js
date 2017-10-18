// var let =process.argv[2];
// console.log(let);

function Letter(letter){
    this.charac = letter;
    this.appear = false;

    this.letterGen = function(charac){
        console.log("Inside letterGen :"+charac);
      if(this.charac === false ){
        return "_";
      }else {
        return charac;
      }
    }
}
// var test = new Letter("test");
// var x = test.letterGen(let);
// console.log(x+"test");
module.exports = Letter;