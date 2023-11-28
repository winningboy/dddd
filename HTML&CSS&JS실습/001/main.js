//커서 깜빡임 효과
let target = document.querySelector("#dynamic");

function blink(){
    target.classList.toggle("active");
}

setInterval(blink, 500);

let stringArr =["UNIVERSE", "GALAXY", " STAR", "PLANET", "COMET"];

let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];

let selectStringArr = selectString.split("");

console.log(selectString);
console.log(selectStringArr);

function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();

        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }
}

dynamic(selectStringArr);