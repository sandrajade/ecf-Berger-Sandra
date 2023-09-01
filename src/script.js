// je déclare mes variables
const heart = document.querySelector("#heart")
const heartEmpty = document.querySelector(".heartEmpty");
const heartFull = document.querySelector(".heartFull");


// Lorsque l’utilisateur clique sur un bouton, on récupère l’élément HTML suivant (ici, l'image heartFull)
heart.addEventListener("click", () => {

    //  quand j'appuie sur ce bouton je veux afficher le coeur rouge juste après


    // on ajoute ou retire la classe “hidden” à cet élément pour le cacher ou l’afficher.
    heartFull.classList.toggle("hidden");
    heartEmpty.classList.toggle("hidden");

});



const projetMeteo = document.querySelector(".projetMeteo");
const enSavoirPlus = document.querySelector(".enSavoirPlus");

enSavoirPlus.addEventListener("click", () => {
    const moreInfo = document.querySelector(".moreInfo");
    projetMeteo.classList.toggle("hidden");
    moreInfo.classList.toggle("hidden");
    setTimeout(() => {
        moreInfo.scrollTo({ top: 10, behavior: "smooth" });
    }, 1000);
})





const arrow = document.querySelector("arrow");
arrow.addEventListener("click", () => {
    const moreInfo = document.querySelector("moreInfo");
    projetMeteo.classList.toggle("hidden");
    moreInfo.classList.toggle("hidden");
    projetMeteo.scrollTo({ top: 0, behavior: "smooth" });
});

document.gdocument.querySelector("enSavoirPlus").onclick = function () {
    // lorsque l'élément class est cliqué  une fonction est éxécutée
    document.querySelector("moreInfo").classList.toggle("hidden");
    document.querySelector("moreInfo").classList.remove("animateslideOutDown");
    document.querySelector("moreInfo").classList.add("animateslideInUp");
};

document.querySelector("arrow").onclick = function () {
    document.querySelector("moreInfo").classList.remove("animateslideInUp");
    document.querySelector("moreInfo").classList.add("animateslideOutDown");

    // au bout de 500ms on ajoute la class hidden à notre élément info
    window.setTimeout(function () {
        document.querySelector("moreInfo").classList.toggle("hidden");
    }, 500);
};

