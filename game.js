var computerChoice = "";
var chances = 5;
var win = 0;
var loss = 0;


function generateArray() {
  var compArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var compGen = Math.floor(Math.random() * compArray.length);
  computerChoice = compArray[compGen];
}

function gameplay() {
  var losses = document.getElementById("losses");
  var wins = document.getElementById("wins");
  var userVar = document.getElementById("userChoice");
      generateArray();
      document.onkeyup = function(event) {
      userVar.textContent = event.key;
      var userChoice = event.key;

      console.log(computerChoice);

      if ((userChoice===computerChoice)) {
        win++;
        wins.textContent = win;
        chances = 5;
        generateArray();
        gameplay();
      }

      else {
        if (chances === 0) {
            loss++;
            losses.textContent = loss;
            chances=5;
            generateArray();
            gameplay();
        }
        else {
          chances--;
        }
      }
      };
    }
    

