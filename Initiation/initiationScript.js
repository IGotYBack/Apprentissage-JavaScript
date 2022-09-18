console.log('Salut les canards');

let titre = document.getElementById("titre");
// console.log(titre)


const btnCorail = document.getElementById("btnCorail");
// console.log(btnCorail, 'bouton corail');
const btnBlanc = document.getElementById("btnBlanc")
// console.log(btnBlanc, "bouton blanc")
const body = document.getElementById("body")

let compteur = 0;
// console.log(compteur, "compteur à incrémenter");

function ajoute(){
    compteur = compteur + 1;
    titre.style.color = "coral";
    console.log(compteur, "total après incrémentation");
    titre.innerText = compteur;
}

// titre.style.color = "coral";

btnCorail.addEventListener('click', function(){
    ajoute()
})

btnBlanc.addEventListener('click', function(){
    ajoute()
})

setTimeout(function(){
    btnBlanc.remove();
    btnCorail.remove();
    console.log('Fin du chrono')
    titre.innerText = "Félicitation tu as cliqué" + " " + compteur + " " + "fois";
    body.style.backgroundColor = "#048b9a";
}, 5000)

// si jamais pas cliqué : indiqué "gros looser, t'as pas cliqué, t'as perdu !"