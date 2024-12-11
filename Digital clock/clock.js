const clock = document.querySelector('.clock');



setInterval(()=>{
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();  
    // console.log(date.toLocaleTimeString());
}, 1000);