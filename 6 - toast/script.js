console.log('Salut les canards')

/* Au clic sur le bouton
Création d'une div -> ajoutée au containerNotifications
Le nouvel élément disparaît au bout de quelques secondes */

const btn = document.querySelector(".btnSend")
// console.log(btn)

const containerNotifs = document.querySelector(".containerNotifications")
// console.log(containerNotifs)

btn.addEventListener("click", () => {
    // console.log('cékliklé')
    
    // je crée une div
    const notification = document.createElement('div');
    
    // j'ajoute du style à la dive
    notification.classList.add('toast');
    
    // j'ajoute du texte à la div
    notification.innerText = "Votre fichier est bien enregistré !";
    // console.log(notification)

    // j'attache la div créée à un élément existant
    containerNotifs.appendChild(notification);

    // après un certain temps, la div disparaît 
    setTimeout(() => {
        notification.remove();
    }, 4000)
})