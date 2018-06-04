function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com a Nota: ' + nota)
    }
}

soBoaNoticia(7)
soBoaNoticia(6.9)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log("Verdade")
    }
}

seForVerdadeEuFalo(true)
seForVerdadeEuFalo(false)