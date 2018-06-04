const notas = [9, 6, 4, 5, 8, 7]

let notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7)
        notasBaixas.push(notas[i])
}
console.log(notasBaixas)

// com callBack
notasBaixas = notas.filter()