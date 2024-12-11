const form = document.querySelector('form');

//this usecase will give you empty value
// const height=parseFloat(document.querySelector('#height').value)
//     const weight=parseFloat(document.querySelector('#weight').value)
form.addEventListener('submit' ,function(e){
    e.preventDefault();

    const height=parseFloat(document.querySelector('#height').value)
    const weight=parseFloat(document.querySelector('#weight').value)
    const result=document.querySelector('.result');

    if(!height || height<0 ||isNaN(height)){
        result.innerHTML='Please give a valid height';
    }

    else if(!weight || weight<0 ||isNaN(weight)){
        alert('Please enter a weight')
    }

    else{
            const bmi = (weight / ((height * height)/10000)).toFixed(2); 
            result.innerHTML = `BMI: ${bmi}`;
            

              
              
    }
    if(bmi < 18.6){
        result.innerHTML = "Underweight";
      }
      else if(bmi >= 18.6 && bmi < 25){
        result.innerHTML = "Normal weight";
      }
      else{
        result.innerHTML = "Overweight";
      }

    
});