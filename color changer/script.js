const grey = document.querySelector('#grey');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const body = document.querySelector('body');

grey.addEventListener('click',function(e){
    body.style.backgroundColor = 'grey';
})
red.addEventListener('click',function(e){
    body.style.backgroundColor = 'red';
})
green.addEventListener('click',function(e){
    body.style.backgroundColor = 'green';
})
blue.addEventListener('click',function(e){
    body.style.backgroundColor = 'blue';
})