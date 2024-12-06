const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
  }

  function allClear(){
    display.value = '';
  }
  function squareRoot(){
    try{
        display.value = Math.sqrt(parseFloat(display.value));
    }
    catch(error){
        alert("Invalid input for squareroot");
        allClear();
    }
    
  }
  function findPi(){
    display.value += Math.PI;
  }
function calculate(){
    try{
        const expression = display.value.replace(/\^/g, '**');
        display.value = eval(expression);

    }
    catch(error){
        alert("Invalid Expression");
        allClear();
    }

}