let game = document.getElementById("game");
let userInput = document.getElementById("userInput");
let checkBtn = document.getElementById("checkBtn");
let result = document.getElementById("result");
let numbers = document.getElementById("numbers");
let Start = document.getElementById("Start");
let Again = document.getElementById("Again");
let timer_msg = document.getElementById("timer_msg");

timer_msg.classList.add('none');
result.classList.add('none');
// Timer
let seconds ;
let countdown = () => {
  if (seconds > 0 ) {
    seconds -- ;
    timer_msg.textContent = `${seconds}`;
  }if (seconds <= 0) {
  clearInterval(timer_interval);
  timer_msg.textContent = `The Code Is : ${random_numbers}`;
}
}
let timer_interval ; 



// Generate a random code function
let generate_a_ran_code = (length) => {
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let code ='';
   for (let i = 0; i < length; i++) {
     code += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return code;
}




// Display a random code
let random_numbers ;
generat_a_number = () => {
  userInput.disabled = true;
  seconds = 15;
  result.textContent = '';
  Again.classList.add('none');
  checkBtn.classList.add('none');
  random_numbers = generate_a_ran_code(8)
  Start.classList.add("none")
  numbers.textContent = `${random_numbers}` ;
  setTimeout(() => {
  numbers.textContent = "Remember it !";
  checkBtn.classList.remove('none');
  Again.classList.remove('none');
  clearInterval(timer_interval); 
timer_interval = setInterval(countdown, 1000);
userInput.disabled = false;
  timer_msg.classList.remove('none');
  
}, 3000);
}
Start.addEventListener("click" , generat_a_number);
Again.addEventListener("click" , function () {
  timer_msg.classList.add('none');
  result.classList.add('none');
  clearInterval(timer_interval);
  timer_msg.textContent = ''
  userInput.value = ''
  generat_a_number();
});





// Check user input code
checkBtn.addEventListener("click" , function () {
  user_input_number = Number(userInput.value) ; 
  if (user_input_number === random_numbers) {
    result.textContent = 'Bravoo !';
    result.classList.add('updated');
setTimeout(() => {
  result.classList.remove('updated');
}, 300);

    result.style.color = 'green';
    clearInterval(timer_interval);
    result.classList.remove('none');
  }else{
    result.textContent = 'Answer is false';
    result.classList.add('updated');
setTimeout(() => {
  result.classList.remove('updated');
}, 300);

    result.style.color = 'red';
    result.classList.remove('none');
  }
})