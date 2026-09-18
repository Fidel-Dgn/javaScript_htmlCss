const btn =document.querySelector('button');

const monh2 = document.querySelector("h2");
const madiv = document.querySelector("div");


btn.addEventListener("click" , () => {
    monh2.className = "modificationH1";
    madiv.className = "DIV1";

});
console.log(btn);