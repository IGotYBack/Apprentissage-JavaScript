console.log('Salut les canards')

// Au clic sur l'icône,
// la div modal descend jusqu'en bas de l'écran
// et l'icône se modifie en croix
// Au clic suivant, 
// la div modal remonte jusqu'en haut de l'écran
// et l'icône reprend sa forme d'origine (menu burger).

// Sélectionne, stocke, soumet à l'action

const icone = document.querySelector('.navbar-mobile i');
// // console.log(icone)
// const modal = document.getElementsByClassName('modal');
// console.log(modal)
const modal = document.querySelector('.modal');
console.log(modal)

icone.addEventListener('click',function(){
    console.log("cékliké");
    modal.classList.toggle('change-modal');
});