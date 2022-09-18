console.log('Salut les canards')

// sélection stocke soumet à l'action
const modal = document.querySelector(".modalContainer");
// console.log(modal);
const btnCode = document.querySelector(".btnSuccess");
// console.log(btnCode)
const code = document.querySelector(".code");
// console.log(code)
const icone = document.querySelector(".fa-times")
// console.log(icone)

function displayModal (){
    // console.log("défilement détecté")
    let hauteur = this.document.documentElement.scrollTop;
    // console.log(hauteur, " nombre de pi xels depuis le haut de la page")

    if(hauteur > 400){
        // console.log("affichage de la modale")
        modal.style.display = "flex";
    }

    // hauteur>400 ? modal.style.display = "flex" : "none"
}

/* au défilement de la page vers le bas, 
    div modalContainer doit s'afficher */

window.addEventListener('scroll', displayModal) 

/* au clic sur le button
    le code apparaît*/

btnCode.addEventListener("click", () => {
    code.style.display = "block";
    btnCode.style.display = "none";
})

/* au clic sur l'icone croix, 
    refermer la modale */

icone.addEventListener("click", () => {
    modal.style.display = "none";
    window.removeEventListener("scroll", displayModal)
})
