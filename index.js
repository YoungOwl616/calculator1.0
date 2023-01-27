let viewportDiv = document.querySelector("#viewport-div");
let viewportPara = document.querySelector("#viewport-para");

// variables that are storing "arith-grid-item" buttons and their event listener functions
let arithBtn1 = document.querySelector("#grid-item-1");
let arithBtn2 = document.querySelector("#grid-item-2");
let arithBtn3 = document.querySelector("#grid-item-16");
let arithBtn4 = document.querySelector("#grid-item-7");
let arithBtn5 = document.querySelector("#grid-item-3");
let arithBtn6 = document.querySelector("#grid-item-20");

arithBtn1.addEventListener("click", function() {
    viewportPara.textContent += " / ";
})

arithBtn2.addEventListener("click", function() {
    viewportPara.textContent += " * ";
})

arithBtn3.addEventListener("click", function() {
    viewportPara.textContent += ".";
})

arithBtn4.addEventListener("click", function() {
    viewportPara.textContent += " + ";
})

arithBtn5.addEventListener("click", function() {
    viewportPara.textContent += " - ";
})

arithBtn6.addEventListener("click", function() {
    viewportPara.textContent += " ** ";
})

//variables that are storing "num-item" buttons and their event listener functions
let numBtn1 = document.querySelector("#grid-item-4");
let numBtn2 = document.querySelector("#grid-item-5");
let numBtn3 = document.querySelector("#grid-item-6");
let numBtn4 = document.querySelector("#grid-item-8");
let numBtn5 = document.querySelector("#grid-item-9");
let numBtn6 = document.querySelector("#grid-item-10");
let numBtn7 = document.querySelector("#grid-item-11");
let numBtn8 = document.querySelector("#grid-item-12");
let numBtn9 = document.querySelector("#grid-item-13");
let numBtn10 = document.querySelector("#grid-item-15");
let numBtn11 = document.querySelector("#grid-item-18");
let numBtn12 = document.querySelector("#grid-item-19");

numBtn1.addEventListener("click", function() {
    viewportPara.textContent += "1";
})

numBtn2.addEventListener("click", function() {
    viewportPara.textContent += "2";
})

numBtn3.addEventListener("click", function() {
    viewportPara.textContent += "3";
})

numBtn4.addEventListener("click", function() {
    viewportPara.textContent += "4";
})

numBtn5.addEventListener("click", function() {
    viewportPara.textContent += "5";
})

numBtn6.addEventListener("click", function() {
    viewportPara.textContent += "6";
})

numBtn7.addEventListener("click", function() {
    viewportPara.textContent += "7";
})

numBtn8.addEventListener("click", function() {
    viewportPara.textContent += "8";
})

numBtn9.addEventListener("click", function() {
    viewportPara.textContent += "9";
})

numBtn10.addEventListener("click", function() {
    viewportPara.textContent += "0";
})

numBtn11.addEventListener("click", function() {
    viewportPara.textContent += "(";
})

numBtn12.addEventListener("click", function() {
    viewportPara.textContent += ")";
})

//variables that are storing "func-grid" buttons and their event listener functions
let funcBtn1 = document.querySelector("#grid-item-14");
let funcBtn2 = document.querySelector("#grid-item-17");

funcBtn1.addEventListener("click", function() {
    viewportPara.textContent = eval(`${viewportPara.textContent}`);
})

funcBtn2.addEventListener("click", function() {
    viewportPara.textContent = "";
})