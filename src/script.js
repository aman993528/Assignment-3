document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("calc-display");
    const display1 = document.getElementById("calc-display1");
    const buttons = document.getElementsByClassName("btn");
  
    let currentValue = "";
  
    function evaluateResult() {
      const convertedValue = currentValue
        .replace("×", "*")
        .replace("÷", "/")
        .replace("%", "*0.01")
        .replace("sin", "Math.sin")
        .replace("cos", "Math.cos")
        .replace("ln", "Math.log")
        .replace("π", "Math.PI")
        .replace("log", "Math.log10")
        .replace("e", "Math.E")
        .replace("tan", "Math.tan")
        .replace("√", "Math.sqrt")
        .replace("Rad|Deg", "Math.PI / 180")
        .replace("□", "**")
        .replace("E", "Math.exp");
  
  
      const result = eval(convertedValue);
      currentValue = result.toString();
      display.innerText = currentValue;
      
    }
  
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener("click", function () {
        const value = button.innerText;
  
        try {
          if (value == "AC") {
            currentValue = "";
            display.innerText = currentValue;
            display1.innerText ="Ans=0"
          } else if (value == "=") {
            display1.innerText = currentValue;
            evaluateResult();
            
          }
          else if (
            i == 0
          ) {
            currentValue += "";
            display.innerText = currentValue;
          } else if (value == "Xy") {
            currentValue += "□";
            display.innerText = currentValue;
          } else if (value == "EXP") {
            currentValue += "E";
            display.innerText = currentValue;
          } else {
            currentValue += value;
            display.innerText = currentValue;
          }
        } catch (error) {
          console.error(error);
          currentValue = "ERROR";
          display.innerText = currentValue;
        }
      });
    }
  });
  let button1 = document.querySelector(".num");
  let button2 = document.querySelector(".alpha");
  let prop = document.querySelector(".logs");
  let prop1 = document.querySelector(".numeric");
  
    let y = 1;
    let x = 0;
  document.querySelector(".num").addEventListener("click", rim);
  function rim(){
    if(y==0){
    button1.classList.toggle("num1")
    button2.classList.toggle("num1")
    prop.classList.toggle("gx-2");
    prop1.classList.toggle("gx-2");
    x=0;
    }
    else{
    }
  }
  
  document.querySelector(".alpha").addEventListener("click", rim1);
  function rim1(){
    if(x==0){
      button1.classList.toggle("num1");
      button2.classList.toggle("num1");
      prop1.classList.toggle("gx-2");
      prop.classList.toggle("gx-2");
  
      x = 1;
      y=0;
    }
    else{
    }
  
  }
  let but = document.querySelector(".colgrey1");
  let but1 = document.querySelector(".colgrey2");
  document.querySelector("#deg").addEventListener("click", rim2);
  function rim2(){
    but.classList.toggle("grey1");
    but1.classList.toggle("grey1");
  
  }
  