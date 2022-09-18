console.log('Salut les canards');

//selection - stocke - soumet à l'action

const cookies = document.querySelector(".cookies");
// console.log(cookies)
const btnYes = document.querySelector(".btnYes");
// console.log(btnYes)
const btnParametres = document.querySelector(".btnParametres");
// console.log(btnParametres)

// au clic du bouton accepter
// la bannière devient invisible
btnYes.addEventListener("click", function(){
    // console.log("sayé saclik")
    cookies.style.opacity = "0";
    btnYes.style.cursor = "auto";
})

// au clic du bouton paramètres
// un popup s'ouvre avec les paramètres

btnParametres.addEventListener("click", function(){
    // console.log("On va faire apparaître des choses comme par magie")
    cookies.style.opacity = "0";
    btnParametres.style.cursor = "auto";
    alert("Nom' Nom', un peu de thé avec vos cookies ? ");
})