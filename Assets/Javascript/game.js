function gameplay() {

      let win = 0;
      let wins = document.getElementById("wins");

      let loss = 0;
      let losses = document.getElementById("losses");

      let userVar = document.getElementById("userChoice");
      document.onkeyup = function(event) {
      userVar.textContent = event.key;
      let userChoice = event.key;

      let compArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      let computerChoice = document.getElementById("computerChoice");
      let compGen = Math.floor(Math.random() * compArray.length);
      computerChoice.textContent = compArray[compGen];

      console.log(compArray[compGen]);

      if ((userChoice===compArray[compGen])) {
        win++;
        wins.textContent = win;
      }

      else {
            loss++;
            losses.textContent = loss;
          
      }
      };
    }

