let valid_max = false;

let N = 0

while (valid_max != true) {

     N = Math.round(Number((window.prompt(prompt))))

    if (N > 0) {

        valid_max = true
    }

}



let num = Math.floor(Math.random() * N) + 1;

let guesses = []

console.log(num)

function the_guess() {

    

    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    if (isNaN(guess))  {

        message.innerHTML  = "That is not a number!"
    }

    else if (guess <= 0 || guess > N) {

        message.innerHTML = "That number is not in range, try again."
        
    }

    else if (guesses.includes(guess)) {

        message.innerHTML = `You already guessed ${guess}<br>Guess a different number.`
    }

    else if (guess == num) {

        guesses.push(guess)
        numOfguesses = guesses.length
        message.innerHTML = `You got it! It took you ${numOfguesses} tries and your guesses were ${guesses.join(", ")}`
        
        }
    else if (guess < num) {

        message.innerHTML = "No, try a higher number."
        guesses.push(guess)

        }
    else  if (guess > num) {

        message.innerHTML = "No, try a lower number."
        guesses.push(guess)


        }
}