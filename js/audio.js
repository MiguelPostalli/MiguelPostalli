let somFundoLigado = false;
    
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("som-fundo").play();
    
//     setTimeout(() => {
//         if (confirm("Desligar Som de Fundo?")) {
//             document.getElementById("som-fundo").pause();
//         }
//     }, 2000)
// })

const playButton = document.getElementById("play-button");

function PlayButtonClicked() {
    if (!somFundoLigado) {
        document.getElementById("som-fundo").play();
        playButton.classList.remove("bi-play-fill");
        playButton.classList.add("bi-pause-fill");
    } else {
        document.getElementById("som-fundo").pause();
        playButton.classList.remove("bi-pause-fill");
        playButton.classList.add("bi-play-fill");
    }
    somFundoLigado = !somFundoLigado;
}