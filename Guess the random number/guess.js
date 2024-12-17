let randomNumber = Math.floor(Math.random() * 100+1);
console.log('random:' , randomNumber);

const guessBtn = document.querySelector('#guessBtn');
const restart = document.querySelector('.restart');
let count = 0 ;

guessBtn.addEventListener('click' , () => {
 const inputNumber = document.querySelector('#guessInput');
 const feedback= document.querySelector('.feedbackspan');
 const attempt = document.querySelector('.attemptspan');
 const input = parseInt(inputNumber.value);
 console.log(inputNumber);

if(isNaN(input)){
  alert('Please enter a valid number');
  return;
}
  if(input < 1 || input > 100){
  alert('Please enter a number between 1 and 100');
  return;
}

count++;
      attempt.textContent = count;

 if(randomNumber < input){
  feedback.textContent = 'Too high . Try again!';
  
}
else if(randomNumber > input){
  feedback.textContent = 'Too low . Try again!';
  
}
else{
  feedback.textContent = 'Congratulations! you guessed correctly.';
  inputNumber.disabled = true;
  guessBtn.disabled = true;
}
});


restart.addEventListener('click' , () => {
  const randomNumber = Math.floor(Math.random() * 100+1);
console.log('New random number:' , randomNumber);

let inputNumber = document.querySelector('#guessInput');
 let feedback= document.querySelector('.feedbackspan');
let attempt = document.querySelector('.attemptspan');

inputNumber.value = '';
inputNumber.disabled = false ;
guessBtn.disabled = false ;

feedback.textContent = '';
attempt.textContent = '0';
count = 0 ;



});



