console.log('Salut les canards')

// sélectionne, stocke, soumet à l'action

const switchBox = document.querySelector(".switch");
// console.log(switchBox)
const btn = document.querySelector(".btn");
// console.log(btn)
const icone = document.querySelector("i");
// console.log(icone)
const titre = document.querySelector(".titre");
// console.log(titre)
const container = document.querySelector(".container")
// console.log(body)

// Au clic sur la div switch
// le cercle se déplace
// l'icône se déplace et se transforme
// le body change de couleur de fond
// le titre change

// au clic, si le text affiche dark morde
// affiche light mode
// sinon affiche dark mode

switchBox.addEventListener("click", function(){
    // console.log("géclické")
    switchBox.classList.toggle("switchBackgroundChange");
    btn.classList.toggle("btnChange");
    icone.classList.toggle("iconeChange");
    icone.classList.toggle("fa-moon");
    icone.classList.toggle("fa-sun");
    container.classList.toggle("containerChange");

    if(titre.innerText === "DARK MODE"){
        titre.innerText = "Light Mode";
    }
    else{
        titre.innerText = "DARK MODE";
    }
});
