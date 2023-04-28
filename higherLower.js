let valid_max = false;

let N = 0

while (valid_max != true) {

     N = Math.round(Number((window.prompt(prompt))))

    if (N > 0) {

        valid_max = true
    }

}



let num = Math.floor(Math.random() * N) + 1;

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

    else if (guess == num) {

        message.innerHTML = "You got it!"
        }
    else if (guess < num) {

        message.innerHTML = "No, try a higher number."
        }
    else  if (guess > num) {

        message.innerHTML = "No, try a lower number."

        }
}