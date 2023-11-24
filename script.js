let calculation = document.getElementById("result");

let leftHandValue = 0;
let rightHandValue = 0;

function displayToScreen(value)  
{
    if(value == "Clear")
    {
        calculation.innerHTML = '';
        return;
    }
    calculation.innerHTML += value;
}

let buttons = document.querySelectorAll(".calculator-button")

buttons.forEach(button => 
{
    button.addEventListener("click",function()
    {       
        (button.innerHTML == '=') ? calculation.innerHTML = eval(calculation.innerHTML)
                : displayToScreen(button.innerHTML);  
    })
});


