console.log('Salut les canards');
// sélectionne, stocke, soumet à l'action

const icone = document.querySelector("i");
// console.log(icone)
const btnAbonne = document.querySelector(".btnAbonne")
// s

// au clic sur le bouton abonnez-vous
// le bouton change de texte
// le bouton change de couleur

btnAbonne.addEventListener("click", function(){
    // console.log("Clic Button")
    
    if(btnAbonne.innerText === "Abonné <3"){
        btnAbonne.innerText = "Abonnez-vous !" ;
    }
    else{
        btnAbonne.innerText = "Abonné <3";
    };

    btnAbonne.classList.toggle("abonne")
})

// au clic sur le bouton abonnez-vous
// l'icône meh-blank de vient icônre sourire

icone.addEventListener("click", function(){
    // console.log("Le smiley va changer comme par magie")
    icone.classList.toggle("fa-face-meh-blank");
    icone.classList.toggle("fa-smile-wink");
    icone.classList.toggle("happy")
})


{/* <i class="fa-regular fa-face-grin-beam"></i> */}

// Faire en sorte que le bouton abonné devienne un bonnet quand il 
