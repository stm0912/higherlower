let valid_max = false;

let N = 0




while (valid_max != true) {

     N = Math.round(Number((window.prompt("Choose the maximum range for the Higher-Lower Game."))))

    if (N > 0) {

        let instructions = document.querySelector("#instructions");

       instructions.innerHTML = `Guess a number between 1 and ${N}`

        valid_max = true
    }

}



let num = Math.floor(Math.random() * N) + 1;

let guesses = []

console.log(num)

const input = document.querySelector("#guess")
input.addEventListener("keydown", handleKeyDown)

function handleKeyDown(event) {
    if (event.key == "Enter") {
        event.preventDefault()
        the_guess()
    }
}

function the_guess() {
console.log("button clicked")

    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    function resetInput() {
        document.getElementById("guess").value = ""
    }

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

        resetInput()
}
