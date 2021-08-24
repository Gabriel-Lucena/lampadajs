"use strict"

function botoesLigaDesliga(ligarEstado, desligarEstado) {

    const lampada = document.getElementById("lampada")
    const ligar = document.getElementById("ligar")

    ligar.disabled = ligarEstado
    desligar.disabled = desligarEstado


}

function lampadaQuebrada() {

    return document.getElementById("lampada").src.indexOf("quebrada") !== -1

    // console.log(document.getElementById("lampada").src.indexOf("Desligada"))

}

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
        botoesLigaDesliga(true,false)

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
        botoesLigaDesliga(false,true)
    
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

        botoesLigaDesliga(true,true)
        lampada.src = "img/quebrada.jpg"
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
