const changercouleurH1 = document.querySelector('h1');/*utiliser pour la selection du titre h1 */
changercouleurH1.addEventListener('mouseover', () =>{
    changercouleurH1.style.backgroundColor="green";
});

changercouleurH1.addEventListener('mouseout', () =>{
    changercouleurH1.style.backgroundColor= "white ";
    alert('Attention je chance de couleur');
    /*alert est utilise dans ce cas pour attirer l'atention de l'utilisateur sur l'action effectuee lorsque le curseur entre en contact avec la partie concernee */
});

console.log(changercouleurH1);


 const moninput01=document.querySelector("#input21");
 moninput01.onblur = () => {
    alert("Vous quittez le champ input01.")
 };


console.log(moninput01);

// const monh2=document.querySelector("h2");


// const madiv =document.querySelector("div");

// const monbutton= document.querySelector("button");
// monbutton.addEventListener("click", () => {
//     monh2.style.color = "red";
//     monh2.style.background = "#ffebebff";
//     madiv.style.border = "10px solid black";
// });

// console.log(monbutton);





