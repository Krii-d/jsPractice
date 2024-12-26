//generate a random color 

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i<6;i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
    intervalId = setInterval(changeColor ,1000);
    }
    function changeColor () {
        document.body.style.backgroundColor = randomColor()
    }
    console.log('color changing started');
   }

   const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
    document.body.style.backgroundColor = 'white';
    console.log('color changing stopped');
   }
   
document.querySelector('#Start').
addEventListener('click' , startChangingColor);

document.querySelector('#Stop').
addEventListener('click' , stopChangingColor);