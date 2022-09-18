console.log('Salut les canards')

// sélectionne et stocke

const questions = document.querySelectorAll(".question");
console.log(questions)

// fonctions

// soumet à l'action 

/* 
   au clic sur chaque élément du tableau, 
    la réponse correspondante apparaît
    l'icône change
   au deuxième clic sur la question
    la réponse correspondante disparaît
    l'icône revient à son état normal 
*/

questions.forEach((item) => {
    console.log(item, "item")
    item.addEventListener("click", () => {
        // console.log("cékliklé")
        // je sélectionne et stocke la div suivante de l'item cliqué
        const next = item.nextElementSibling;
        const icone = item.lastElementChild;
        // console.log(next)
        next.classList.toggle("hidden")
        next.classList.toggle("visible")

        icone.classList.toggle("fa-chevron-down")
        icone.classList.toggle("fa-chevron-up")

    })
})
