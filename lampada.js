"use strict"

const lampada = document.getElementById("lampada")
let idInterval

function botoesLigaDesliga(ligarEstado, desligarEstado) {

    const lampada = document.getElementById("lampada")
    const ligar = document.getElementById("ligar")

    ligar.disabled = ligarEstado
    desligar.disabled = desligarEstado


}

// function lampadaQuebrada() {

//     return document.getElementById("lampada").src.indexOf("quebrada") !== -1

//     return lampada.src.indexOf("quebrada") !== -1

//     // console.log(document.getElementById("lampada").src.indexOf("Desligada"))

// }

const lampadaQuebrada = () => lampada.src.indexOf("quebrada") !== -1

function ligarLampada() {

    const lampada = document.getElementById("lampada")

    // Substituído pela função botoesLigaDesliga
    //    ||
    //    ||
    //    \/
    // const ligar = document.getElementById("ligar")
    // const desligar = document.getElementById("desligar")

    if (!lampadaQuebrada()) {
        lampada.src = "img/ligada.jpg"
        botoesLigaDesliga(true, false)

        // Substituído pela função botoesLigaDesliga
        //    ||
        //    ||
        //    \/
        // ligar.disabled = true
        // desligar.disabled = false
    }
}

function desligarLampada() {

    const lampada = document.getElementById("lampada")

    // Substituído pela função botoesLigaDesliga
    //    ||
    //    ||
    //    \/
    // const ligar = document.getElementById("ligar")
    // const desligar = document.getElementById("desligar")

    if (!lampadaQuebrada()) {
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)

        // Substituído pela função botoesLigaDesliga
        //    ||
        //    ||
        //    \/
        // ligar.disabled = false
        // desligar.disabled = true
    }
}

function quebrarLampada() {

    const lampada = document.getElementById("lampada")

    // Substituído pela função botoesLigaDesliga
    //    ||
    //    ||
    //    \/
    // const ligar = document.getElementById("ligar")
    // const desligar = document.getElementById("desligar")

    if (!lampadaQuebrada()) {
        // Substituído pela função botoesLigaDesliga
        //    ||
        //    ||
        //    \/
        // ligar.disabled = true
        // desligar.disabled = true

        botoesLigaDesliga(true, true)
        lampada.src = "img/quebrada.jpg"
    }
}

// function lampadaDesligada() {

//     return lampada.src.includes("desligada")

// }

const lampadaDesligada = () => lampada.src.includes("desligada")

function trocarImagem() {

    if (lampadaDesligada()) {

        ligarLampada()

    } else {

        desligarLampada()

    }
}

function piscar() {

    const piscar = document.getElementById("piscar")

    if (piscar.textContent == "Piscar") {

        idInterval = setInterval(trocarImagem, 2)
        piscar.textContent = "Parar"

    } else {

        clearInterval(idInterval)
        piscar.textContent = "Piscar"

    }


}

// Eventos

document.getElementById("ligar")
    .addEventListener("click", ligarLampada)

document.getElementById("desligar")
    .addEventListener("click", desligarLampada)

document.getElementById("lampada")
    .addEventListener("dblclick", quebrarLampada)

document.getElementById("lampada")
    .addEventListener("mouseover", ligarLampada)

document.getElementById("lampada")
    .addEventListener("mouseleave", desligarLampada)

document.getElementById("piscar")
    .addEventListener("click", piscar)