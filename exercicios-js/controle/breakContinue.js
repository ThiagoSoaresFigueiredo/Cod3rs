const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i in notas) {
    if (i == 5) {
        break
    }

    console.log(notas[i])
}

for (let i in notas) {
    if (i == 5) {
        continue
    }

    console.log(notas[i])
}

externo: for (let i in notas) {
    interno: for (let j in notas) {
        if (i == 2 && j == 3) {
            break externo
        }

        console.log(i, j)
    }
}