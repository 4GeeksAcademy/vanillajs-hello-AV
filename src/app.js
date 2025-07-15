import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("boton").addEventListener ("click", cardGenerate)
  cardGenerate()
  console.log("Hello Rigo from the console!");
};

function cardGenerate (){
  let symbols = ["♦", "♥", "♠", "♣"]
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
  let symbolsRandom = symbols[Math.floor(Math.random() * symbols.length)]
  let numbersRandom = numbers[Math.floor(Math.random() * numbers.length)]
  
  console.log(symbolsRandom, numbersRandom)
  document.getElementById("palo").innerText = symbolsRandom
  document.getElementById("numero").innerText = numbersRandom
  document.getElementById("paloDos").innerText = symbolsRandom

  if(symbolsRandom == "♥" || symbolsRandom == "♦"){
    document.getElementById("palo").style.color = "red"
    document.getElementById("paloDos").style.color = "red"
  }else{
    document.getElementById("palo").style.color = "black"
    document.getElementById("paloDos").style.color = "black"
  }
}

